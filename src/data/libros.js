export async function agregarLibro(formData) {
    try {
      
  
      const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        body: JSON.stringify({data: Object.fromEntries(formData)}),
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