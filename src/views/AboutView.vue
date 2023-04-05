<template>
  <v-app id="about">
    <AppSidebar />
    <v-main>
      <v-container>
        <h1>API機能実装</h1>
        <p>「外務省 海外安全情報オープンデータ」のAPIを取得してみる。<br>セレクトボックスのoptionはjsonファイルをv-forで出力。</p>
        <select v-model="selectedArea">
          <option v-for="(area, index) in areas" :value="area.value" :key="index">{{ area.label }}</option>
        </select>
        <ul>
          <li class="list" v-for="(riskInfo, index) in riskInfos" :key="index">
            <h2>{{ riskInfo.title }}</h2>
            <p>{{ riskInfo.leaveDate }}</p>
            <p>{{ riskInfo.lead }}</p>
            <p>{{ riskInfo.subText }}</p>
            <a :href="riskInfo.url">{{ riskInfo.url }}</a>
          </li>
          <li v-if="riskInfos.length === 0">選択してください</li>
        </ul>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import areasData from '@/data/country.json';
import AppSidebar from '@/components/layouts/AppSidebar'

export default {
  data() {
    return {
      selectedArea: '',
      areas: areasData,
      riskInfos: [],
    };
  },
  watch: {
    selectedArea: function (newVal) {
      if (newVal < 1000) {
        newVal = ('000' + newVal).slice(-4);
      }
      this.getSpots(newVal);
    },
  },
  methods: {
    getSpots(area) {
      axios.get(`https://www.ezairyu.mofa.go.jp//opendata/country/${area}A.xml`)
        .then((response) => {
          const xmlss = response.data;
          console.log(xmlss); // XMLファイルをコンソールログする
          const parser = new DOMParser();
          const xml = parser.parseFromString(response.data, 'text/xml');
          const risks = xml.getElementsByTagName('riskLeaveDate');
          const riskInfos = [];
          let isEmpty = true;
          for (let i = 0; i < risks.length; i++) {
            const riskInfo = {
              leaveDate: risks[i].textContent,
              title: risks[i].parentNode.getElementsByTagName('riskTitle')[0].textContent,
              lead: risks[i].parentNode.getElementsByTagName('riskLead')[0].textContent,
              subText: risks[i].parentNode.getElementsByTagName('riskSubText')[0].textContent,
              url: risks[i].parentNode.getElementsByTagName('riskUrl')[0].textContent
            };
            if (riskInfo.leaveDate || riskInfo.title || riskInfo.lead || riskInfo.subText || riskInfo.url) {
              isEmpty = false;
            }
            riskInfos.push(riskInfo);
          }
          if (isEmpty) {
            riskInfos.push({ title: "情報はありません", leaveDate: "", lead: "", subText: "", url: "" });
          }
          this.riskInfos = riskInfos;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  components: {
    AppSidebar
  }
};
</script>

<style>
ul {
  list-style: none;
  margin-top: 50px;
}

.list {
  text-align: left;
}

.list:nth-of-type(n+2) {
  margin-top: 20px;
}

select {
  margin-top: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

select:hover {
  background-color: #e6e6e6;
}

select:focus {
  background-color: #fff;
  box-shadow: 0 0 5px #b3d4fc;
}

option {
  font-weight: normal;
}
</style>