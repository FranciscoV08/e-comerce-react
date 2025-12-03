'use client'

//Context para tener valores y funcionalidades globales
import { createContext, useContext, useEffect, useState } from "react";
import dataProduc from "../data";

//Confitg de firebase
import { collection, addDoc, doc, writeBatch, getDocs } from "firebase/firestore";
import { dbFire } from "../firebase.js";

// Creamos el contexto
const ProductContext = createContext();

// hook personalizado para utilizar el contex
export const useProdContext = () => {
    // usamos nuestro conxtexto
    const context = useContext(ProductContext)
    // Validamos si existen valores 
    if (!context) {
        new Error("No se encontro ningun contexto")
    }
    // Retornamos el contexto todos los valores globales
    return context
}

//referencia a la collection 
const ref = collection(dbFire, "productos");

// Creamos nuestro contexto provider -- para proveer todos los valores globales
export const ProductContextProvider = ({ children }) => {

const [carrito, setCarrito] = useState(() => {
    if (typeof window !== "undefined") {
        const carritoLS = localStorage.getItem("carrito");
        return carritoLS ? JSON.parse(carritoLS) : [];
    }
    return [];
});
    const [productos, setProductos] = useState()


    const obtenerProductos = async () => {
        try {
            // Obtiene mediante la referencia los datos 
            const data = await getDocs(ref);
            //Mapeamos el array de datos y limpiamos la salida
            const productos = data.docs.map(doc => (doc.data()))
            //
            setProductos(productos)
        } catch (error) {
            console.log(error)
        }
    }
    const guardarDatos = async () => {
        try {
            dataProduc.forEach((prod) => {
                const docRef = addDoc(ref, prod);
            })
            console.log(data)
        } catch (error) {

            console.log(error)
        }


    }
    const obtenerProductoId = (id) => {
        try {
            if (productos.length >= 0) {
                const productId = productos.find(prod => prod.id == id)
                return productId
            }
        } catch (error) {
            console.log(error)
        }
    }
    const obtenerProdFilter = (categoria) => {
        try {
            if (productos.length >= 0) {
                const prodFilter = productos.filter(prod => prod.category == categoria)

                return prodFilter
            }
        } catch (error) {
            console.log(error)
        }
    }
    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {

            const existe = prev.find(item => item.id === producto.id);

            if (existe) {
                // Si ya está en el carrito → aumentar cantidad
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // Si no existe → agregarlo con quantity 1
            return [...prev, { ...producto, quantity: 1 }];
        });

    }
     const calcularSubtotal = () => {
        return carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    

    useEffect(() => {
        obtenerProductos()
        
        const carritoLS = localStorage.getItem("carrito");
        
        if (carritoLS) {
            setCarrito(JSON.parse(carritoLS));
        }
        console.log(carritoLS)

    }, [])

    useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);



    // Funcion para registrar un usuario
    return (
        <ProductContext.Provider value={{
            guardarDatos,
            obtenerProductos,
            obtenerProductoId,
            obtenerProdFilter,
            agregarAlCarrito,
            calcularSubtotal,
            carrito,
            productos
        }}>
            {children}
        </ProductContext.Provider>
    )
}