const { createCanvas, loadImage} = require('canvas');
const fs = require('fs');

const certificateNames = [
  "Vivek M G", 
  "Viraj Deshpande", 
  "Harsh Banka"
];

const imagePath = 'C:\\Users\\vivek\\Downloads\\Organizer Certificate.png';

const generateCertificates = async () => {
  const image = await loadImage(imagePath);
  const width = image.width;
  const height = image.height;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  certificateNames.forEach((name) => {
    
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);
    ctx.font = 'bold 124px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const x = width / 2;
    const y = height / 2.32 - 20;
    
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 6;
    ctx.fillText(name, x, y);
    ctx.restore();
    ctx.save();
    
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = 'white';
    ctx.fillText(name, x, y);
    ctx.restore();
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`${name.replace(/\s/g, '_')}_Certificate.png`, buffer);
  });
};
generateCertificates();