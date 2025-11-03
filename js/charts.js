
function initCharts(){
  const loadChart = (id, type, data, options)=>{
    const el = document.getElementById(id); if(!el) return; const ctx = el.getContext('2d'); return new Chart(ctx, {type, data, options});
  };
  const commonOptions = {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}, tooltip:{backgroundColor:'#fff',titleColor:'#2F3B49',bodyColor:'#2F3B49',borderColor:'#e5e7eb',borderWidth:1}}};
  loadChart('fertilizerChart','bar',{labels:['Uréia (N)','MAP (P)','KCl (K)'],datasets:[{label:'USD/ton (CFR Brasil)',data:[422,718,362],backgroundColor:['#47A8F5','#F7C548','#A8D8B9']}]}, Object.assign({},commonOptions,{indexAxis:'y'}));
  loadChart('inadimplenciaChart','doughnut',{labels:['Crédito Livre','Crédito Geral'],datasets:[{data:[9.35,5.14],backgroundColor:['#F24C4E','#47A8F5']}]}, commonOptions);
}
document.addEventListener('DOMContentLoaded', function(){ if(typeof Chart === 'undefined'){ const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/chart.js'; s.onload=initCharts; document.head.appendChild(s);} else { initCharts(); } });
