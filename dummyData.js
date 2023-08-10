const data = [
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Villa',
    price: 500,
    name: 'Beverly Hills',
    address: '2799 Kandhar, Bake City, Obra',
    beds: '3',
    bathroom: '3',
    dimension: '5x7 m',
    availableFrom: new Date('10/08/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    type: 'Villa',
    price: 1500,
    name: 'Baker Street',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '6',
    dimension: '5x7 m',
    availableFrom: new Date('08/25/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    type: 'Flat',
    price: 230,
    name: 'Sundown',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '1',
    dimension: '5x7 m',
    availableFrom: new Date('09/25/2023'),
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Apartment',
    price: 1130,
    name: 'Beverly Hills',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '0',
    dimension: '5x7 m',
    availableFrom: new Date('09/12/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'House',
    price: 2000,
    name: 'Sunny Retreat',
    address: '789 Seaside Lane, Coastal Town',
    beds: '4',
    bathroom: '3',
    dimension: '6x8 m',
    availableFrom: new Date('09/01/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Flat',
    price: 350,
    name: 'City Skyline Heights',
    address: '456 Downtown Avenue, Metropolis',
    beds: '2',
    bathroom: '2',
    dimension: '4x6 m',
    availableFrom: new Date('08/15/2023'),
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Apartment',
    price: 450,
    name: 'Cosmopolitan Living',
    address: '123 Urban Street, Downtown Central',
    beds: '2',
    bathroom: '1',
    dimension: '4x5 m',
    availableFrom: new Date('09/30/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1617505481649-8d0accca73d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Villa',
    price: 500,
    name: 'Beverly Hills',
    address: '2799 Kandhar, Bake City, Obra',
    beds: '3',
    bathroom: '3',
    dimension: '5x7 m',
    availableFrom: new Date('10/08/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Villa',
    price: 1500,
    name: 'Baker Street',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '6',
    dimension: '5x7 m',
    availableFrom: new Date('08/25/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Flat',
    price: 230,
    name: 'Sundown',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '1',
    dimension: '5x7 m',
    availableFrom: new Date('09/25/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1610569244414-5e7453a447a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Apartment',
    price: 1130,
    name: 'Beverly Hills',
    address: 'Ada Pada Suda Pada',
    beds: '3',
    bathroom: '0',
    dimension: '5x7 m',
    availableFrom: new Date('09/12/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'House',
    price: 2000,
    name: 'Sunny Retreat',
    address: '789 Seaside Lane, Coastal Town',
    beds: '4',
    bathroom: '3',
    dimension: '6x8 m',
    availableFrom: new Date('09/01/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1598714805247-5dd440d87124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Flat',
    price: 2200,
    name: 'City Skyline Heights',
    address: '456 Downtown Avenue, Metropolis',
    beds: '2',
    bathroom: '2',
    dimension: '4x6 m',
    availableFrom: new Date('08/15/2023'),
  },
  {
    img: 'https://images.unsplash.com/photo-1588012886079-baef0ac45fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'Apartment',
    price: 2400,
    name: 'Cosmopolitan Living',
    address: '123 Urban Street, Downtown Central',
    beds: '2',
    bathroom: '1',
    dimension: '4x5 m',
    availableFrom: new Date('09/30/2023'),
  },
];

export default data;