function bubbleSort(arr) {
    let n = arr.length;
    for (let o = 0; o < n - 1; o++) { 
        for (let i = 0; i < n - 1 - o; i++) { 
            if (arr[i] > arr[i + 1]) { 
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

