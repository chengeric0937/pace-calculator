function calculatePace() {
    // 獲取輸入值
    const distance = parseFloat(document.getElementById('distance').value);
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    // 檢查輸入是否有效
    if (isNaN(distance) || distance <= 0) {
        alert('請輸入有效的距離');
        return;
    }
    
    if (minutes === 0 && seconds === 0) {
        alert('請輸入有效的時間');
        return;
    }
    
    // 計算總秒數
    const totalSeconds = minutes * 60 + seconds;
    
    // 計算每公里需要的秒數 (距離轉換為公里)
    const secondsPerKm = totalSeconds / (distance / 1000);
    
    // 轉換為分:秒格式
    const paceMinutes = Math.floor(secondsPerKm / 60);
    const paceSeconds = Math.floor(secondsPerKm % 60);
    
    // 顯示結果
    const paceResult = document.getElementById('pace-result');
    paceResult.textContent = `${paceMinutes}:${paceSeconds < 10 ? '0' + paceSeconds : paceSeconds}`;
    
    // 顯示結果區域
    document.getElementById('result').classList.remove('hidden');
}