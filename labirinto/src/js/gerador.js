export function gerarLabirinto(config) {
    const { largura, altura, densidadeParedes } = config;
    
    // 1. Cria matriz vazia preenchida com 0 (caminhos)
    const matriz = Array(altura)
        .fill(null)
        .map(() => Array(largura).fill(0));
    
    // 2. Preenche aleatoriamente baseado na densidade
    for (let y = 0; y < altura; y++) {
        for (let x = 0; x < largura; x++) {
            // Math.random() gera 0.0 a 1.0. Se for menor que densidade, vira parede
            if (Math.random() < densidadeParedes) {
                matriz[y][x] = 1;
            }
        }
    }
    
    // 3. Garante início e fim sempre livres
    matriz[0][0] = 0; // Canto superior esquerdo
    matriz[altura - 1][largura - 1] = 0; // Canto inferior direito
    
    return matriz;
}