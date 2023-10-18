const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
  ];

  

  //Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
  //Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.
  const waterPokemons = pokemons
  .filter((pokemon)=> {
    return pokemon.type === 'Water' ;
  })
  
  .map((pokemon)=> {
    return pokemon.name;


  })

  const waterPokemonsCounter = waterPokemons.length; 
  
  console.log(`"Water" türündeki Pokemon sayısı:  `,waterPokemonsCounter);
  console.log(`"Water" türündeki Pokemon isimleri: `,waterPokemons);
  
  //Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
  //Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.

const newPokemonArray = pokemons.map((pokemon,index )=> {
    const newPokemonArray = {...pokemon};
    newPokemonArray.experience = experience*2;
    return newPokemonArray;
});

  
  console.log('"doubledExperienceArray": ',pokemons);
  
  //Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
  // Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
  // Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.
  const allWaterPokemonsHighExperience = pokemons.every(pokemon => pokemon.type === 'Water' && pokemon.experience >= 60);

  const someFirePokemonHighExperience = pokemons.some(pokemon => pokemon.type === 'Fire' && pokemon.experience >= 70);

  
  console.log(
    "Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?",
    allWaterPokemonsHighExperience
  );
  console.log(
    "'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?",
    someFirePokemonHighExperience
  );
  
  //Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
  // kullanarak hesaplamak istiyorsunuz.

  //???????
  
  console.log(
    "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
      totalElectricExperience
  );
  
  //Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
  console.log(typeExperienceAverages);

  //???

