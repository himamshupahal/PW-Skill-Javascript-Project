const Books = [

  {
    Tittle : " The Catcher in the Rye " ,
    Author : " J.D. Salinger " ,
    Year : 1951
  },

  {
    Tittle : " To Kill a Mockingbird " ,
    Author : " Harper Lee " ,
    Year : 1960
  },

  {
    Tittle : " 1984 " ,
    Author : " George Orwell " ,
    Year : 1949 
  },

  {
    Tittle : " The Hunger Games " ,
    Author : " Suzname Colling " ,
    Year : 2008
  },

  {
    Tittle : " The Girls with Draong Tattoo " ,
    Author : " Stieg Larsson " ,
    Year : 2005
  },

];

const FilteredBooks = Books.filter(Books => Books.Year <= 2010 );

const FormattedBooks = FilteredBooks.map(Books => {
  const CaptailizedAuthor = Books.Author.toUpperCase();
  return{
    Tittle : Books.Tittle,
    Author : CaptailizedAuthor ,
    Year : Books.Year
  };
}
);

console.log(FormattedBooks);

/*

// ***************** -: RESULT :- ******************** //

[
  {
    Tittle: ' The Catcher in the Rye ',
    Author: ' J.D. SALINGER ',
    Year: 1951
  },
  {
    Tittle: ' To Kill a Mockingbird ',
    Author: ' HARPER LEE ',
    Year: 1960
  },
  { Tittle: ' 1984 ', Author: ' GEORGE ORWELL ', Year: 1949 },
  {
    Tittle: ' The Hunger Games ',
    Author: ' SUZNAME COLLING ',
    Year: 2008
  },
  {
    Tittle: ' The Girls with Draong Tattoo ',
    Author: ' STIEG LARSSON ',
    Year: 2005
  }
]

*/