function processValues() {
    const input = document.getElementById("inputValues").value;

    // Substituir vírgulas por pontos e processar os valores
    const values = input
        .split(" ")                // Divide pelos espaços
        .map(val => val.replace(",", ".")) // Substituir vírgulas por pontos
        .map(Number)              // Converte para número
        .filter(v => !isNaN(v))   // Filtra entradas não numéricas
        .sort((a, b) => a - b);   // Ordena em ordem crescente

    // Exibir valores ordenados
    document.getElementById("ral").innerText = "Ral: " + values.join(" ");

    // Contagem de repetições
    const countMap = {};
    values.forEach(value => countMap[value] = (countMap[value] || 0) + 1);

    // Criar tabela
    const table = document.getElementById("tableOutput");
    table.innerHTML = "<tr><th>Valor</th><th>Repetições</th></tr>";
    for (const [value, count] of Object.entries(countMap)) {
        const row = table.insertRow();
        row.insertCell(0).innerText = value;
        row.insertCell(1).innerText = count;
    }
}
