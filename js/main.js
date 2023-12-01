document.addEventListener('DOMContentLoaded', function () {
    // Define porcentajes para cada barra
    const percentages = [60, 45, 20, 15];
  
    for (let i = 1; i <= 4; i++) {
      // Obtener elementos HTML
      const fill = document.getElementById(`fill${i}`);
      const percentLabel = document.getElementById(`percent${i}`);
  
      // Asignar porcentaje y ancho de la barra
      const percentage = percentages[i - 1];
      fill.style.width = `${percentage}%`;
      percentLabel.innerText = `${percentage}%`;
    }
  });
  