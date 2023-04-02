export async function agregarLibro(nuevoLibro) {
    try {
      
  
      const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        body: JSON.stringify({data: nuevoLibro}),
        headers: {
            'Content-Type': 'application/json'
          }
      });
  
      if (!res.ok) {
        throw new Error(`Error al agregar libro: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function eliminarLibro(id){
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
        })

        await res.json()
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerLibro(id){
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const data = await res.json();

  return data.data
}

export async function editarLibro(editarLibro, id) {
  try {
    

    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({data: editarLibro}),
      headers: {
          'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
      throw new Error(`Error al agregar libro: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}