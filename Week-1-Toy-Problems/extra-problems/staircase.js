function steps(n) {
    for (let o = 1; o <= n; o++) { 
        let step = ""; 
        for (let i = 1; i <= o; i++) { 
            step += "#"; 
        }
        console.log(step); 
    }
}
