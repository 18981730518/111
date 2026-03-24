export const AppState = {
    mode: 0, 
    progress: 1.0, 
    animSpeed: 5.0, 
    speedCurve: 1.5,
    
    rotSpeed: 1.0,
    camSpeed: 1.0, 
    camMin: 1.0,  
    camMax: 12.0, 
    
    curve: [0.42, 0.0, 0.58, 1.0], 
    
    scanAxis: 0, 
    scanMin: -2.0, 
    scanMax: 2.0,  
    
    noiseScale: 1.2, 
    noiseEdge: 0.4, 
    
    persistence: 0.0, 
    fadePower: 1.2,   
    
    pointSize: 0.50,  
    bloomStrength: 1.25, 
    exposure: 1.00,   
    damp: 0.80, 
    
    brightness: 1.0, 
    contrast: 1.0, 
    saturation: 1.0,

    // 音频脉冲强度滑块默认值
    audioIntensity: 1.5 
};

export const SysState = {
    isAutoAnimating: false,
    simulationTime: 0,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    // 存储平滑后的音频数据
    audioData: { bass: 0.0 }
};