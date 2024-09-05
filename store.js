// 从localStorage 中读取数据
function getData(){
    // 如果本地localStorage中不存在数据
    if(!localStorage.getItem('geojosn')){
        localStorage.setItem('geojosn','[]')
    }
    return JSON.parse(localStorage.getItem('geojson'))
}

// 将数据保存到 localStorage 中
function saveData(data){
    localStorage.setItem('geojson',JSON.stringify(data))
}