document.getElementById("vpnButton").addEventListener("click", activateVPN);

let vpnActivated = false;

function activateVPN() {
  vpnActivated = true;
  document.getElementById("status").innerText = "VPN activada. Estás protegido.";
}

function hackTile() {
  if (!vpnActivated) {
    generateFakeFile();
    document.getElementById("status").innerText = "VPN no activada. Se ha registrado tu IP.";
  } else {
    document.getElementById("status").innerText = "Hackeando... Todo está bien.";
  }
}

function generateFakeFile() {
  // Genera una IP aleatoria
  const randomIP = generateRandomIP();
  const fileContent = `IP: ${randomIP}\nERLC\n`;

  // Crea un archivo .txt con los datos
  const blob = new Blob([fileContent], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'registro.txt';
  link.click();
}

function generateRandomIP() {
  // Genera una IP aleatoria de 4 octetos (para simular)
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
