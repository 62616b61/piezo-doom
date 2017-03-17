const five = require('johnny-five')
const board = new five.Board({
  repl: true
})

function play(){
  console.log("");

  const piezo = new five.Piezo(8);

  piezo.play({
    song: [

      // ---- LINE ---- //

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4],

      [90, 1 / 4],
      [90, 1 / 4],
      [225, 1 / 4],
      [275, 1 / 4],

      //--

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4 + 1],

      // ---- LINE ---- //

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4],

      [90, 1 / 4],
      [90, 1 / 4],
      [225, 1 / 4],
      [275, 1 / 4],

      //--

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4 + 1],

      // ---- LINE ---- //

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4],

      [90, 1 / 4],
      [90, 1 / 4],
      [225, 1 / 4],
      [275, 1 / 4],

      //--

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4 + 1],

      // ---- LINE ---- //

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4],

      [90, 1 / 4],
      [90, 1 / 4],
      [225, 1 / 4],
      [275, 1 / 4],

      //--

      [90, 1 / 4],
      [90, 1 / 4],
      [500, 1 / 4],
      [90, 1 / 4],

      [90, 1 / 4],
      [350, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],

      [275, 1 / 4],
      [90, 1 / 4],
      [90, 1 / 4],
      [150, 1 / 4 + 1],

      //--

      [755, 1 / 8],
      [665, 1 / 8],
      [620, 1 / 8],
      [755, 1 / 8],
      [910, 1 / 8],
      [820, 1 / 8],
      [755, 1 / 8],
      [620, 1 / 8],

      [755, 1 / 8],
      [820, 1 / 8],
      [910, 1 / 8],
      [1000, 1 / 8],
      [910, 1 / 8],
      [820, 1 / 8],
      [755, 1 / 8],
      [620, 1 / 8],
    ],
    tempo: 100
  });
}

board.on('ready', function () {
  //play();

  board.repl.inject({
    play: () => play()
  });
});


/*
T111 L16O3E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5F# E D# E A G F# E F# G A B A G F# D# L16O3E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5B G E G B G B >E <B G B G B >E G B L16O3A A >A <A A >G <A A >F <A A >D# <A A O5P16 O3A >F <A A >A <A A >G <A A >F <A A O5P16 L3O3A L16A A >A <A A >G <A A >F <A A >D# <A A O5P16 O3A >F <A A >A <A A >G <A A L32O5E D C E C <A >C E A E C E C E C <A L16<E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16>C# C# >C# <C# C# B C# C# A C# C# G C# C# >P16 <C# A <B B >B <B B >A <B B >G <A# A O5P16 L3O3A L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5E G <B G >E <B >G E G E <B G >E G B >E L16O3E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5D# C <B F# >F# D# <B A >A F# D# <B >B A F# D# L16O3E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E L32O6E <B G E B >E <B G E G B G >E <B G E L16O3A A O5C O3A A >B <A A >G# <A A >G <A A O5P16 O3A >A <A A O5C O3A A >B <A A >G# <A A O5P16 L3O3A L16A A O5C O3A A >B <A A >G# <A A >G <A A O5P16 O3A >A <A A O5C O3A A >B <A A L32O5E D C E C <A >C E A E C E C E C <A L16<E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16>C# C# >G <C# C# >F# <C# C# >E <C# C# >C# <C# C# >P16 <C# >E O3B B O5F# O3B B O5E O3B B O5D# O3A# A O5P16 L3O3A L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E L32O5A F# D# <B A F# D# <B O5B A F# D# <B A F# D# L16<E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5F# E D# E A G F# E F# G A B A G F# D# L16O3E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5B G E G B G B >E <B G B G B >E G B L16O3A A >A <A A >G <A A >F <A A >D# <A A O5P16 O3A >F <A A >A <A A >G <A A >F <A A O5P16 L3O3A L16A A >A <A A >G <A A >F <A A >D# <A A O5P16 O3A >F <A A >A <A A >G <A A L32O5E D C E C <A >C E A E C E C E C <A L16<E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16>C# C# >C# <C# C# B C# C# A C# C# G C# C# >P16 <C# A <B B >B <B B >A <B B >G <A# A O5P16 L3O3A L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5E G <B G >E <B >G E G E <B G >E G B >E L16O3E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E >C <E E O5P16 L3O3E L16E E >E <E E >D <E E >C <E E A# E E O5P16 O3E >C <E E >E <E E >D <E E L32O5D# C <B F# >F# D# <B A >A F# D# <B >B A F# D# L16O3E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E L32O6E <B G E B >E <B G E G B G >E <B G E L16O3A A O5C O3A A >B <A A >G# <A A >G <A A O5P16 O3A >A <A A O5C O3A A >B <A A >G# <A A O5P16 L3O3A L16A A O5C O3A A >B <A A >G# <A A >G <A A O5P16 O3A >A <A A O5C O3A A >B <A A L32O5E D C E C <A >C E A E C E C E C <A L16<E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E >E <E E O5P16 L3O3E L16>C# C# >G <C# C# >F# <C# C# >E <C# C# >C# <C# C# >P16 <C# >E O3B B O5F# O3B B O5E O3B B O5D# O3A# A O5P16 L3O3A L16E E >G <E E >F# <E E >D# <E E >D <E E O5P16 O3E >E <E E >G <E E >F# <E E L32O5A F# D# <B A F# D# <B O5B A F# D# <B A F# D#
*/
