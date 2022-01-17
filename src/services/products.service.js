
class ProductsService {

  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.simulatedService());
      }, 1500);
    });
  }
  simulatedService () {
    return [
      { id: 'o4VVoY2', name: 'LaJusticia colágeno con magnesio 450comp', url_media: 'lajusticia-colageno.jpg', price: 14.35 },
      { id: '5o51zDL', name: 'Xhekpon® crema facil 40ml', url_media: 'xhekpon-crema.jpg', price: 6.49 },
      { id: 'nrXKHeb', name: 'Cerave ® Crema Hidratante 340ml', url_media: 'cerave-crema.jpg', price: 11.70 },
      { id: '1qx9ia9', name: 'Hyabak solución 10ml', url_media: 'hyabak-solucion.jpg', price: 9.48 },
      { id: 'KA6-BzJ', name: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml', url_media: 'fotoprotector-isdin.jpg', price: 19.74 },
      { id: 'PkbfqRb', name: 'Piz Buin® Allegry SPF50+ loción 200ml', url_media: 'piz-buin.jpg', price: 8.65 }
    ]
  }
}

export default new ProductsService();