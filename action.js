function calc() {
    var temp = document.getElementById("nhap").value
    var tren = document.getElementById("can-tren").value
    var arrs = []
    var tong = 0

    console.log(typeof temp)
    if(temp == '' || temp == 0 || tren == 0 || tren == '') {
        document.getElementById("footer").innerHTML = 'vui long dien day du can tren va so phan tu mang'
        return 0
    }

    temp = parseInt(temp)
    tren = parseInt(tren)
    for(var i = 0; i < temp; i++) {
        var t = Math.floor(Math.random()*tren)
        arrs.push(t)
        tong += t
    }

    document.getElementById("footer").innerHTML = "cac phan tu cua day co gia tri ngau nhien tu 0 den " + tren
    document.getElementById("mang").innerHTML = arrs
    document.getElementById("max").innerHTML = Math.max(...arrs)
    document.getElementById("min").innerHTML = Math.min(...arrs)
    document.getElementById("sum").innerHTML = tong

}