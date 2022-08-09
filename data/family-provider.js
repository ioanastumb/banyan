const getHarryPotterUniverseFamilyData = () => (
  {
    familyTree: [
      // gen 0
      {
        id: 0,
        parents: [-1],
        gender: 'male',
        fullName: 'Phineas Nigellus Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 1,
        parents: [-1],
        gender: 'female',
        fullName: 'Ursula Flint',
        familyBranches: []
      },

      // gen 1
      {
        id: 2,
        parents: [
          0,
          1
        ],
        gender: 'male',
        fullName: 'Cygnus Black II',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 3,
        parents: [-1],
        gender: 'female',
        fullName: 'Violetta Bulstrode',
        familyBranches: []
      },
      {
        id: 4,
        parents: [
          0,
          1
        ],
        gender: 'male',
        fullName: 'Arcturus Black II',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 5,
        parents: [-1],
        gender: 'female',
        fullName: 'Lysandra Yaxley',
        familyBranches: []
      },
      {
        id: 6,
        parents: [-1],
        gender: 'male',
        fullName: 'Unknown Potter family common ancestor #1',
        familyBranches: [
          'Potter'
        ]
      },

      // gen 2
      {
        id: 7,
        parents: [
          2,
          3
        ],
        gender: 'male',
        fullName: 'Pollux Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 8,
        parents: [-1],
        gender: 'female',
        fullName: 'Irma Crabbe',
        familyBranches: []
      },
      {
        id: 9,
        parents: [
          2,
          3
        ],
        gender: 'female',
        fullName: 'Dorea Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 10,
        parents: [
          6
        ],
        gender: 'male',
        fullName: 'Charlus Potter',
        familyBranches: [
          'Potter'
        ]
      },
      {
        id: 11,
        parents: [
          6
        ],
        gender: 'male',
        fullName: 'Unknown Potter family common ancestor #2',
        familyBranches: [
          'Potter'
        ]
      },
      {
        id: 12,
        parents: [
          4,
          5
        ],
        gender: 'female',
        fullName: 'Cedrella Weasley (nee Black)',
        familyBranches: [
          'Black', 'Weasley'
        ]
      },
      {
        id: 13,
        parents: [-1],
        gender: 'male',
        fullName: 'Septimus Weasley',
        familyBranches: [
          'Weasley'
        ]
      },

      // gen 3
      {
        id: 14,
        parents: [
          7,
          8
        ],
        gender: 'female',
        fullName: 'Walburga Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 15,
        parents: [-1],
        gender: 'male',
        fullName: 'Orion Black',
        familyBranches: []
      },
      {
        id: 16,
        parents: [
          7,
          8
        ],
        gender: 'male',
        fullName: 'Cygnus Black III',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 17,
        parents: [-1],
        gender: 'female',
        fullName: 'Druella Rosier',
        familyBranches: []
      },
      {
        id: 18,
        parents: [
          11
        ],
        gender: 'male',
        fullName: 'Henry Potter',
        familyBranches: [
          'Potter'
        ]
      },

      // gen 4
      {
        id: 19,
        parents: [
          14,
          15
        ],
        gender: 'male',
        fullName: 'Regulus Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 20,
        parents: [
          16,
          17
        ],
        gender: 'female',
        fullName: 'Bellatrix Lestrange (nee Black)',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 21,
        parents: [-1],
        gender: 'male',
        fullName: 'Rodolphus Lestrange',
        familyBranches: []
      },
      {
        id: 22,
        parents: [
          16,
          17
        ],
        gender: 'female',
        fullName: 'Andromeda Tonks (nee Black)',
        familyBranches: [
          'Black', 'Tonks'
        ]
      },
      {
        id: 23,
        parents: [-1],
        gender: 'male',
        fullName: 'Ted Tonks',
        familyBranches: [
          'Tonks'
        ]
      },
      {
        id: 24,
        parents: [
          16,
          17
        ],
        gender: 'female',
        fullName: 'Narcissa Malfoy (nee Black)',
        familyBranches: [
          'Black', 'Malfoy'
        ]
      },
      {
        id: 25,
        parents: [-1],
        gender: 'male',
        fullName: 'Lucius Malfoy',
        familyBranches: [
          'Malfoy'
        ]
      },
      {
        id: 26,
        parents: [
          18
        ],
        gender: 'male',
        fullName: 'Fleamont Potter',
        familyBranches: [
          'Potter'
        ]
      },
      {
        id: 27,
        parents: [-1],
        gender: 'female',
        fullName: 'Euphemia Potter',
        familyBranches: []
      },
      {
        id: 28,
        parents: [
          12,
          13
        ],
        gender: 'male',
        fullName: 'Arthur Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 29,
        parents: [-1],
        gender: 'female',
        fullName: 'Molly Weasley (nee Prewett)',
        familyBranches: []
      },

      // gen 5
      {
        id: 30,
        parents: [
          14,
          15
        ],
        gender: 'male',
        fullName: 'Sirius Black',
        familyBranches: [
          'Black'
        ]
      },
      {
        id: 31,
        parents: [-1],
        gender: 'male',
        fullName: 'Remus Lupin',
        familyBranches: [
          'Lupin'
        ]
      },
      {
        id: 32,
        parents: [
          26,
          27
        ],
        gender: 'male',
        fullName: 'James Potter',
        familyBranches: [
          'Potter'
        ]
      },
      {
        id: 33,
        parents: [-1],
        gender: 'female',
        fullName: 'Lily Evans',
        familyBranches: []
      },
      {
        id: 34,
        parents: [
          22,
          23
        ],
        gender: 'female',
        fullName: 'Nymphadora Tonks',
        familyBranches: [
          'Tonks', 'Black'
        ]
      },

      // gen 6
      {
        id: 35,
        parents: [
          24,
          25
        ],
        gender: 'male',
        fullName: 'Draco Malfoy',
        familyBranches: [
          'Malfoy', 'Black'
        ]
      },
      {
        id: 36,
        parents: [-1],
        gender: 'female',
        fullName: 'Astoria Greengrass',
        familyBranches: []
      },
      {
        id: 37,
        parents: [
          32,
          33
        ],
        gender: 'male',
        fullName: 'Harry Potter',
        familyBranches: [
          'Potter'
        ]
      },
      {
        id: 38,
        parents: [
          28,
          29
        ],
        gender: 'female',
        fullName: 'Ginevra Molly Potter (nee Weasley)',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 39,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'William Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 40,
        parents: [-1],
        gender: 'female',
        fullName: 'Fleur Delacour',
        familyBranches: []
      },
      {
        id: 41,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Charles Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 42,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Percy Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 43,
        parents: [-1],
        gender: 'female',
        fullName: 'Audrey Weasley',
        familyBranches: []
      },
      {
        id: 44,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Fred Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 45,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'George Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 46,
        parents: [-1],
        gender: 'female',
        fullName: 'Angelina Johnson',
        familyBranches: []
      },
      {
        id: 47,
        parents: [
          28,
          29
        ],
        gender: 'male',
        fullName: 'Ronald Billius Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 48,
        parents: [-1],
        gender: 'female',
        fullName: 'Hermione Granger',
        familyBranches: []
      },

      // gen 7
      {
        id: 49,
        parents: [
          31,
          34
        ],
        gender: 'male',
        fullName: 'Edward Remus Lupin',
        familyBranches: [
          'Lupin', 'Tonks', 'Black'
        ]
      },
      {
        id: 50,
        parents: [
          35,
          36
        ],
        gender: 'male',
        fullName: 'Scorpius Malfoy',
        familyBranches: [
          'Malfoy', 'Black'
        ]
      },
      {
        id: 51,
        parents: [
          37,
          38
        ],
        gender: 'male',
        fullName: 'James Sirius Potter',
        familyBranches: [
          'Potter', 'Weasley'
        ]
      },
      {
        id: 52,
        parents: [
          37,
          38
        ],
        gender: 'male',
        fullName: 'Albus Severus Potter',
        familyBranches: [
          'Potter', 'Weasley'
        ]
      },
      {
        id: 53,
        parents: [
          37,
          38
        ],
        gender: 'female',
        fullName: 'Lily Luna Potter',
        familyBranches: [
          'Potter', 'Weasley'
        ]
      },
      {
        id: 54,
        parents: [
          39,
          40
        ],
        gender: 'female',
        fullName: 'Victoire Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 55,
        parents: [
          39,
          40
        ],
        gender: 'female',
        fullName: 'Dominique Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 56,
        parents: [
          39,
          40
        ],
        gender: 'male',
        fullName: 'Louis Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 57,
        parents: [
          42,
          43
        ],
        gender: 'female',
        fullName: 'Molly Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 58,
        parents: [
          42,
          43
        ],
        gender: 'female',
        fullName: 'Lucy Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 59,
        parents: [
          45,
          46
        ],
        gender: 'male',
        fullName: 'Fred Weasley II',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 60,
        parents: [
          45,
          46
        ],
        gender: 'female',
        fullName: 'Roxanne Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 61,
        parents: [
          47,
          48
        ],
        gender: 'female',
        fullName: 'Rose Granger-Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      },
      {
        id: 62,
        parents: [
          47,
          48
        ],
        gender: 'male',
        fullName: 'Hugo Granger-Weasley',
        familyBranches: [
          'Weasley', 'Black'
        ]
      }],
    familyBranches: [
      {
        familyBranchName: 'Black',
        includeInSearch: true
      },
      {
        familyBranchName: 'Malfoy',
        includeInSearch: true
      },
      {
        familyBranchName: 'Potter',
        includeInSearch: true
      },
      {
        familyBranchName: 'Weasley',
        includeInSearch: true
      },
      {
        familyBranchName: 'Tonks',
        includeInSearch: true
      }
    ]
  }
);

export { getHarryPotterUniverseFamilyData as getFamilyData }