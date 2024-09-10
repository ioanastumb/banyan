const getBigwalletFamilyData = () => (
  {
    familyTree: [
      {
        id: 0,
        parents: [-1],
        gender: 'female',
        fullName: 'Lady Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet'
        ]
      },
      {
        id: 1,
        parents: [-1],
        gender: 'male',
        fullName: 'Wyatt Wallet-Skaggs',
        familyBranches: [
          'Wallet-Skaggs'
        ]
      },
      {
        id: 2,
        parents: [
          0,
          1
        ],
        gender: 'female',
        fullName: 'Anaya Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 3,
        parents: [
          0,
          1
        ],
        gender: 'female',
        fullName: 'Lacy Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 4,
        parents: [-1],
        gender: 'male',
        fullName: 'Bradley Case',
        familyBranches: [
          'Case'
        ]
      },
      {
        id: 5,
        parents: [
          3,
          4
        ],
        gender: 'male',
        fullName: 'Sir Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Case',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 6,
        parents: [-1],
        gender: 'male',
        fullName: 'Atticus Bourdreaux',
        familyBranches: [
          'Bourdreaux'
        ]
      },
      {
        id: 7,
        parents: [
          2,
          6
        ],
        gender: 'female',
        fullName: 'Little Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 8,
        parents: [-1],
        gender: 'male',
        fullName: 'Gerald Disiac-Roe',
        familyBranches: [
          'Disiac-Roe'
        ]
      },
      {
        id: 9,
        parents: [
          7,
          8
        ],
        gender: 'male',
        fullName: 'Frederick Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 10,
        parents: [-1],
        gender: 'female',
        fullName: 'Penny Pizzazz',
        familyBranches: [
          'Pizzazz'
        ]
      },
      {
        id: 11,
        parents: [
          9,
          10
        ],
        gender: 'female',
        fullName: 'Katrina Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 12,
        parents: [-1],
        gender: 'male',
        fullName: 'Mario Robles',
        familyBranches: [
          'Robles'
        ]
      },
      {
        id: 13,
        parents: [
          11,
          12
        ],
        gender: 'male',
        fullName: 'Sebastian Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 14,
        parents: [-1],
        gender: 'female',
        fullName: 'Luna Feldman',
        familyBranches: [
          'Feldman'
        ]
      },
      {
        id: 15,
        parents: [
          13,
          14
        ],
        gender: 'female',
        fullName: 'Raggy Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 16,
        parents: [
          13,
          14
        ],
        gender: 'male',
        fullName: 'Richie Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 17,
        parents: [
          13,
          14
        ],
        gender: 'male',
        fullName: 'Lord Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 18,
        parents: [
          13,
          14
        ],
        gender: 'female',
        fullName: 'Lady Bigwallet II',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 19,
        parents: [-1],
        gender: 'male',
        fullName: 'Semaj Renrut',
        familyBranches: [
          'Renrut-Bigwallet'
        ]
      },
      {
        id: 20,
        parents: [-1],
        gender: 'male',
        fullName: 'Thorne Bailey',
        familyBranches: [
          'Bailey'
        ]
      },
      {
        id: 21,
        parents: [-1],
        gender: 'male',
        fullName: 'Akito Mori',
        familyBranches: [
          'Mori'
        ]
      },
      {
        id: 22,
        parents: [
          18,
          19
        ],
        gender: 'female',
        fullName: 'Banana Renrut Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 23,
        parents: [-1],
        gender: 'male',
        fullName: 'Derumk Paoa',
        familyBranches: [
          'Paoa'
        ]
      },
      {
        id: 24,
        parents: [-1],
        gender: 'male',
        fullName: 'Canoe Reefs',
        familyBranches: [
          'Reefs'
        ]
      },
      {
        id: 25,
        parents: [
          18,
          20
        ],
        gender: 'male',
        fullName: 'Brussel Bailey Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bailey',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 26,
        parents: [
          18,
          20
        ],
        gender: 'female',
        fullName: 'Blueberry Bailey Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bailey',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 27,
        parents: [
          18,
          21
        ],
        gender: 'female',
        fullName: 'Biscuit Mori Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Mori',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 28,
        parents: [
          22,
          23
        ],
        gender: 'female',
        fullName: 'Column Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 29,
        parents: [-1],
        gender: 'male',
        fullName: 'Simeon Silversweater',
        familyBranches: [
          'Silversweater'
        ]
      },
      {
        id: 30,
        parents: [
          22,
          24
        ],
        gender: 'female',
        fullName: 'Plahn Tayne Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Reefs',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 31,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Reginald Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 32,
        parents: [
          15,
          19
        ],
        gender: 'male',
        fullName: 'Bob Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 33,
        parents: [-1],
        gender: 'female',
        fullName: 'Senior Pollination Technician #3',
        familyBranches: []
      },
      {
        id: 34,
        parents: [
          32,
          33
        ],
        gender: 'male',
        fullName: 'Ambrose Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 35,
        parents: [-1],
        gender: 'male',
        fullName: 'An unknown Vatore family ancestor',
        familyBranches: [
          'Vatore'
        ]
      },
      {
        id: 36,
        parents: [
          35
        ],
        gender: 'female',
        fullName: 'Lilith Vatore',
        familyBranches: [
          'Vatore'
        ]
      },
      {
        id: 37,
        parents: [
          35
        ],
        gender: 'male',
        fullName: 'Caleb Vatore',
        familyBranches: [
          'Vatore'
        ]
      },
      {
        id: 38,
        parents: [
          34,
          36
        ],
        gender: 'male',
        fullName: 'Isaiah Bigwallet Vatore',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 39,
        parents: [
          34,
          36
        ],
        gender: 'male',
        fullName: 'Brodie Bigwallet Vatore',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 40,
        parents: [
          34,
          36
        ],
        gender: 'male',
        fullName: 'Candle Bigwallet Vatore',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 41,
        parents: [-1],
        gender: 'female',
        fullName: 'Senior Pollination Technician #3.1',
        familyBranches: []
      },
      {
        id: 42,
        parents: [-1],
        gender: 'female',
        fullName: 'Bonehilda',
        familyBranches: [
          'Bonehilda'
        ]
      },
      {
        id: 43,
        parents: [
          39,
          42
        ],
        gender: 'male',
        fullName: 'Chaz Ricks Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bonehilda',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 44,
        parents: [
          39,
          41
        ],
        gender: 'male',
        fullName: 'Trenton Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 45,
        parents: [-1],
        gender: 'female',
        fullName: 'Hazel Monet',
        familyBranches: [
          'Monet'
        ]
      },
      {
        id: 46,
        parents: [
          44,
          45
        ],
        gender: 'male',
        fullName: 'Angus Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 47,
        parents: [
          44,
          45
        ],
        gender: 'female',
        fullName: 'Nina Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 48,
        parents: [-1],
        gender: 'male',
        fullName: 'Greg',
        familyBranches: [
          'Lunvik'
        ]
      },
      {
        id: 49,
        parents: [
          47,
          48
        ],
        gender: 'male',
        fullName: 'Sandalwood Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Lunvik',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 50,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Rhys Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 51,
        parents: [-1],
        gender: 'male',
        fullName: 'Kevin Swanson',
        familyBranches: [
          'Swanson'
        ]
      },
      {
        id: 52,
        parents: [
          31,
          51
        ],
        gender: 'male',
        fullName: 'Addison Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 53,
        parents: [
          31,
          51
        ],
        gender: 'female',
        fullName: 'Breanne Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 54,
        parents: [
          44,
          45
        ],
        gender: 'female',
        fullName: 'Kristina Monet-Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 55,
        parents: [
          44,
          45
        ],
        gender: 'female',
        fullName: 'Alycia Monet-Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 56,
        parents: [
          44,
          45
        ],
        gender: 'male',
        fullName: 'Caden Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Monet',
          'Vatore',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 58,
        parents: [
          53
        ],
        gender: 'male',
        fullName: 'Shannon Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 59,
        parents: [-1],
        gender: 'female',
        fullName: 'Hilary Markovic',
        familyBranches: [
          'Markovic'
        ]
      },
      {
        id: 60,
        parents: [
          52,
          59
        ],
        gender: 'female',
        fullName: 'Quinn Markovic Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 61,
        parents: [-1],
        gender: 'male',
        fullName: 'Koji Hasegawa',
        familyBranches: [
          'Hasegawa'
        ]
      },
      {
        id: 62,
        parents: [
          60,
          61
        ],
        gender: 'female',
        fullName: 'Willow Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 63,
        parents: [-1],
        gender: 'female',
        fullName: 'Orion Michaelson',
        familyBranches: [
          'Michaelson'
        ]
      },
      {
        id: 64,
        parents: [
          62,
          63
        ],
        gender: 'unknown',
        fullName: 'Stevie Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Michaelson',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 65,
        parents: [
          60,
          61
        ],
        gender: 'male',
        fullName: 'Ash Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 66,
        parents: [-1],
        gender: 'female',
        fullName: 'Krysta Robles',
        familyBranches: [
          'Robles (San Sequoia)'
        ]
      },
      {
        id: 67,
        parents: [
          65,
          66
        ],
        gender: 'male',
        fullName: 'Wayne Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Robles (San Sequoia)',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 68,
        parents: [
          65,
          66
        ],
        gender: 'male',
        fullName: 'Karson Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Robles (San Sequoia)',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 69,
        parents: [
          60,
          61
        ],
        gender: 'male',
        fullName: 'Aspen Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 70,
        parents: [
          69
        ],
        gender: 'male',
        fullName: 'Thomas Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 71,
        parents: [
          60,
          61
        ],
        gender: 'male',
        fullName: 'Alder Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 72,
        parents: [
          71
        ],
        gender: 'male',
        fullName: 'Brent Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 73,
        parents: [
          60,
          61
        ],
        gender: 'male',
        fullName: 'Oak Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 74,
        parents: [
          60,
          61
        ],
        gender: 'female',
        fullName: 'Cherry Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 75,
        parents: [
          60,
          61
        ],
        gender: 'female',
        fullName: 'Maple Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Hasegawa',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 76,
        parents: [
          52,
          59
        ],
        gender: 'male',
        fullName: 'Rye Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 77,
        parents: [
          76
        ],
        gender: 'female',
        fullName: 'Lady Bigwallet III',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 78,
        parents: [-1],
        gender: 'male',
        fullName: 'Wolf',
        familyBranches: [
          'Bain'
        ]
      },
      {
        id: 79,
        parents: [
          77,
          78
        ],
        gender: 'female',
        fullName: 'Laird Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bain',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      },
      {
        id: 80,
        parents: [
          77,
          78
        ],
        gender: 'female',
        fullName: 'Wren Bigwallet',
        familyBranches: [
          'Bourdreaux-Bigwallet',
          'Bain',
          'Markovic',
          'Swanson',
          'Silversweater',
          'Paoa',
          'Renrut-Bigwallet',
          'Feldman',
          'Robles',
          'Pizzazz',
          'Disiac-Roe',
          'Bourdreaux',
          'Wallet-Skaggs'
        ]
      }
    ],
    familyBranches: [
      {
        familyBranchName: 'Bourdreaux-Bigwallet',
        includeInSearch: true
      },
      {
        familyBranchName: 'Renrut-Bigwallet',
        includeInSearch: true
      },
      {
        familyBranchName: 'Feldman',
        includeInSearch: true
      },
      {
        familyBranchName: 'Vatore',
        includeInSearch: true
      },
      {
        familyBranchName: 'Wallet-Skaggs',
        includeInSearch: true
      },
      {
        familyBranchName: 'Case',
        includeInSearch: true
      },
      {
        familyBranchName: 'Disiac-Roe',
        includeInSearch: true
      },
      {
        familyBranchName: 'Pizzazz',
        includeInSearch: true
      },
      {
        familyBranchName: 'Robles',
        includeInSearch: true
      },
      {
        familyBranchName: 'Bailey',
        includeInSearch: true
      },
      {
        familyBranchName: 'Mori',
        includeInSearch: true
      },
      {
        familyBranchName: 'Paoa',
        includeInSearch: true
      },
      {
        familyBranchName: 'Reefs',
        includeInSearch: true
      },
      {
        familyBranchName: 'Silversweater',
        includeInSearch: true
      },
      {
        familyBranchName: 'Bonehilda',
        includeInSearch: true
      },
      {
        familyBranchName: 'Monet',
        includeInSearch: true
      },
      {
        familyBranchName: 'Lunvik',
        includeInSearch: true
      },
      {
        familyBranchName: 'Swanson',
        includeInSearch: true
      },
      {
        familyBranchName: 'Markovic',
        includeInSearch: true
      },
      {
        familyBranchName: 'Hasegawa',
        includeInSearch: true
      },
      {
        familyBranchName: 'Michaelson',
        includeInSearch: true
      },
      {
        familyBranchName: 'Robles (San Sequoia)',
        includeInSearch: true
      },
      {
        familyBranchName: 'Bain',
        includeInSearch: true
      }
    ]
  }
);

window.getBigwalletFamilyData = getBigwalletFamilyData;