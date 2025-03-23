// Function to calculate PAYE (tax)
function calculatePayee(grossSalary) {
    let payee = 0;
    if (grossSalary > 32333) {
        payee = (grossSalary - 32333) * 0.3 + (8333 * 0.25) + (24000 * 0.1);
    } else if (grossSalary > 24000) {
        payee = (grossSalary - 24000) * 0.25 + (24000 * 0.1);
    } else {
        payee = grossSalary * 0.1;
    }
    return payee;
}

// Function to calculate SHIF (Social Health Insurance Fund)
function calculateSHIF(grossSalary) {
    let shif = grossSalary * 0.0275;
    if (shif < 300) {
        return 300; 
    }
    return shif; 
}

// Function to calculate NSSF (National Social Security Fund)
function calculateNSSF(grossSalary) {
    let nssfContribution = 0;
    if (grossSalary <= 7000) {  
        nssfContribution = grossSalary * 0.06; 
    } else if (grossSalary <= 36000) { 
        nssfContribution = grossSalary * 0.06; 
    } else if (grossSalary > 36000) { 
        nssfContribution = 600; 
        }
    return nssfContribution;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    
    let payee = calculatePayee(grossSalary); 
    let shif = calculateSHIF(grossSalary);   
    let nssf = calculateNSSF(grossSalary);  
    let totalDeductions = payee + shif + nssf; 

    let netSalary = grossSalary - totalDeductions;

    console.log("Gross Salary: KES", grossSalary);
    console.log("PAYE: KES", payee);
    console.log("SHIF: KES", shif);
    console.log("NSSF: KES", nssf);
    console.log("Total Deductions: KES", totalDeductions);
    console.log("Net Salary: KES", netSalary);

    return netSalary;
}

