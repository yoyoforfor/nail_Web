    const container = document.querySelector('.ani1');
    const image = document.querySelector('.ani1');

    // 初始變數
    let yPos = 0; // 圖片的初始垂直位置
    let velocity = 0; // 初始速度
    const gravity = 0.5; // 重力加速度
    const bounceFactor = 0.7; // 反彈係數

    // 設定圖片的初始位置
    image.style.left = '50%'; // 水平居中
    image.style.transform = 'translateX(-50%)'; // 水平居中調整
    image.style.top = '0px'; // 初始位置在頂部

    // 更新動畫函數
    function update() {
      velocity += gravity; // 模擬重力作用
      yPos += velocity; // 更新圖片的垂直位置

      // 檢測碰撞：若圖片接觸到地面
      if (yPos + image.offsetHeight >= container.offsetHeight) {
        yPos = container.offsetHeight - image.offsetHeight; // 停留在地面
        velocity = -velocity * bounceFactor; // 模擬反彈，速度衰減
      }

      // 更新圖片位置
      image.style.top = `${yPos}px`;

      // 繼續動畫
      requestAnimationFrame(update);
    }

    // 啟動動畫
    update();