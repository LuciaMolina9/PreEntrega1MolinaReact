import "./CartWidget.css";

const CartWidget = () => {
    const imgCarrito = "https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sdScWRH_AeHdG6vHzMn8xUHCpe7iM6O1Skgi2lPuKG0=";
  
    return (
    <div>
        <img className = 'imgcarrito' src= {imgCarrito} alt="carrito de compras" />
        <strong> 4 </strong>
        
    </div>
  )
}

export default CartWidget