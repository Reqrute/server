export const query = {
    //Rate
    getAllRate:'SELECT * FROM  Rate',
    addNewRate:"INSERT INTO Rate (RateN, Comment) VALUES (@RateN,@Comment)",
    getRateById: 'SELECT * FROM Rate Where Id =@Id',
    deleteRate: 'DELETE FROM [librarydb].[dbo].[Rate] Where Id = @Id',
    updateRateById: 'UPDATE Rate SET RateN = @RateN, Comment= @Comment Where Id= @Id',
    //Book
    getAllBook:'SELECT * FROM Book',
    addNewBook:"INSERT INTO Book (BName, PDate,Publisher,AId,GId,TId) VALUES (@BName,@PDate,@Publisher,@AId,@GId,@TId)",
    getBookById: 'SELECT * FROM Book Where Id =@Id',
    getAllBookByAuthor: "SELECT * FROM Book Where AId =@Id",
    deleteBook: 'DELETE FROM [librarydb].[dbo].[Book] Where Id = @Id',
    updateBookById: 'UPDATE Book SET BName = @BName, PDate= @PDate, Publisher = @Publisher, AId= @AId, GId = @GId, TId= @TId Where Id= @Id',
    getBookByNameAndPublisher: 'SELECT * FROM Book WHERE BName LIKE @BName and Publisher LIKE @Publisher',
    getBookByName: 'SELECT * FROM Book WHERE BName LIKE @BName',
    //Author
    getAllAuthor:'SELECT * FROM  Author',
    addNewAuthor:"INSERT INTO Author (SName, FName,LName,BDate,DDate) VALUES (@SName, @FName,@LName,@BDate,@DDate)",
    getAuthorById: 'SELECT * FROM Author Where Id =@Id',
    deleteAuthor: 'DELETE FROM [librarydb].[dbo].[Author] Where Id = @Id',
    updateAuthorById: 'UPDATE Author SET SName = @SName , FName = @FName ,LName = @LName ,BDate = @BDate ,DDate = @DDate  Where Id= @Id',
    getAuthorByFIO: 'SELECT * FROM Author WHERE SName LIKE @SName and FName LIKE @FName and LName LIKE @LName',
    getAuthorReport: `SELECT ReadRoom.LId, ReadRoom.Number, COUNT(Book.BName) as AmountBook From BookSit 
    Left OUTER JOIN ReadRoom ON ReadRoom.Id = BookSit.RRId 
    Left Outer Join Book ON Book.Id  = BookSit.BId  where Book.AId = @Id GROUP BY ReadRoom.LId, ReadRoom.Number`,
    //Client
    getAllClient:'SELECT * FROM  UserA',
    addNewClient:"INSERT INTO UserA (AId,AddresW,SName,FName,LName) VALUES (@AId,@AddresW,@SName,@FName,@LName)",
    getClientById: 'SELECT * FROM UserA Where Id =@Id',
    deleteClient: 'DELETE FROM [librarydb].[dbo].[UserA] Where Id = @Id',
    updateClientById: 'UPDATE UserA SET AId = @AId ,AddresW = @AddresW ,SName = @SName ,FName = @FName ,LName = @LName Where Id= @Id',
    getClientByFIO: 'SELECT * FROM UserA WHERE SName LIKE @SName and FName LIKE @FName and LName LIKE @LName',
    //Library
    getAllLibrary:'SELECT * FROM  LibraryOB',
    addNewLibrary:"INSERT INTO LibraryOB (NameL, AdrId,Phone,AmountOfR) VALUES (@NameL, @AdrId,@Phone,@AmountOfR)",
    getLibraryById: 'SELECT * FROM LibraryOB Where Id =@Id',
    deleteLibrary: 'DELETE FROM [librarydb].[dbo].[LibraryOB] Where Id = @Id',
    updateLibraryById: 'UPDATE LibraryOB SET NameL = @NameL ,AmountOfR = @AmountOfR , AdrId = @AdrId ,Phone = @Phone Where Id= @Id',
    getLibraryByName: 'SELECT * FROM LibraryOB WHERE NameL LIKE @NameL',

    getLibraryReportp1: `select ReadRoom.LId, ReadRoom.Number, COUNT(DISTINCT UserASub.Id)As Clients, COUNT(DISTINCT BookSit.Id)As Books From ReadRoom
    Left Outer Join BookSit 
    ON ReadRoom.Id = BookSit.RRId
    Left Outer Join UserASub
    ON ReadRoom.Id  = UserASub.RRId 
    where ReadRoom.LId = @Id
    GROUP BY ReadRoom.LId, ReadRoom.Number`,

    getLibraryReportp2: `select DISTINCT ReadRoom.LId, COUNT(DISTINCT UserASub.Id)As Clients From UserASub
    Left Outer Join ReadRoom 
    ON ReadRoom.Id = UserASub.RRId
    where  ReadRoom.LId = @Id and UserASub.CDate Between @Date1 and @Date2 
    GROUP BY ReadRoom.LId`,

    getLibraryReportp3: `select DISTINCT Book.BName, ReadRoom.LId, COUNT(DISTINCT Book.Id)As Books From BookAUs
    Left Outer Join ReadRoom 
    ON ReadRoom.Id = BookAUs.RRId
    Left Outer Join Book 
    ON Book.Id = BookAUs.BId
    where  ReadRoom.LId = @Id and BookAUs.TakenDate  Between @Date1 and @Date2
    GROUP BY Book.BName, ReadRoom.LId`,

    //Genre
    getAllGenre:'SELECT * FROM  Genre',
    getGenreById: 'SELECT * FROM Genre Where Id =@Id',
    //Type
    getAllType:'SELECT * FROM  TypeB',
    getTypeById: 'SELECT * FROM TypeB Where Id =@Id',
    //work addres
    getAllWorkAddress:'SELECT * FROM  AddresW',
    getWorkAddressById: 'SELECT * FROM AddresW Where Id =@Id',
    addNewWorkAddress:"INSERT INTO AddresW (Street, NumberH,Special) VALUES (@Street, @NumberH,@Special)",
    deleteWorkAddress: 'DELETE FROM [librarydb].[dbo].[AddresW] Where Id = @Id',
    updateWorkAddressById: 'UPDATE AddresW SET Street = @Street , NumberH = @NumberH ,Special = @Special Where Id= @Id',
    //adress
    getAllAddress:'SELECT * FROM  Addres',
    getAddressById: 'SELECT * FROM Addres Where Id =@Id',
    addNewAddress:"INSERT INTO Addres (Street, NumberH,Flat) VALUES (@Street, @NumberH,@Flat)",
    deleteAddress: 'DELETE FROM [librarydb].[dbo].[Addres] Where Id = @Id',
    updateAddressById: 'UPDATE Addres SET Street = @Street , NumberH = @NumberH ,Flat = @Flat Where Id= @Id',
    //reading room
    getAllReadingRoom:'SELECT * FROM  ReadRoom',
    getReadingRoomById: 'SELECT * FROM ReadRoom Where Id =@Id',
    addNewReadingRoom:"INSERT INTO ReadRoom (Number, LId) VALUES (@Number, @LId)",
    deleteReadingRoom: 'DELETE FROM [librarydb].[dbo].[ReadRoom] Where Id = @Id',
    updateReadingRoomById: 'UPDATE ReadRoom SET Number = @Number , LId = @LId  Where Id= @Id',
    getAllReadingRoomByLibraryId: "SELECT * FROM ReadRoom Where LId =@Id",
    //subscribe
    getAllSubscribe:'SELECT * FROM  Subscribe',
    getSubscribeById: 'SELECT * FROM Subscribe Where Id =@Id',
    addNewSubscribe:"INSERT INTO Subscribe (TimeS,Cost VALUES (@TimeS,@Cost)",
    deleteSubscribe: 'DELETE FROM [librarydb].[dbo].[Subscribe] Where Id = @Id',
    getAllSubscribeByLibraryId: "SELECT * FROM Subscribe Where LId =@Id",
    updateSubscribeById: 'UPDATE Subscribe SET TimeS = @TimeS ,Cost = @Cost Where Id= @Id',
    //UserASub
    getAllUserASub:'SELECT * FROM  UserASub',
    getAllUserASubBySubcribeId: "SELECT * FROM UserASub Where SubId =@Id",
    getAllUserASubByUserId: "SELECT * FROM UserASub Where UsId =@Id",
    getAllUserASubByReadingRoomId: "SELECT * FROM UserASub Where RRId =@Id",
    addNewUserASub:"INSERT INTO UserASub (CDate,SubId, RRId,UsId) VALUES (@CDate,@SubId, @RRId,@UsId)",
    deleteUserASub: 'DELETE FROM [librarydb].[dbo].[UserASub] Where Id = @Id',
    updateUserASubById: 'UPDATE UserASub SET CDate =@CDate ,SubId =@SubId , RRId =@RRId ,UsId =@UsId Where Id= @Id',
    //BookARate
    getAllBookARate:'SELECT * FROM  BookARate',
    getAllBookARateByBookId: "SELECT * FROM BookARate Where BId =@Id",
    getAllBookARateByUserId: "SELECT * FROM BookARate Where UsId =@Id",
    getAllBookARateByRateId: "SELECT * FROM BookARate Where RId =@Id",
    addNewBookARate:"INSERT INTO BookARate (BId, RId,UsId) VALUES (@BId, @RId,@UsId)",
    deleteBookARate: 'DELETE FROM [librarydb].[dbo].[BookARate] Where Id = @Id',
    updateBookARateById: 'UPDATE BookARate SET BId = @BId , RId = @RId ,UsId = @UsId Where Id= @Id',
    //BookAUs
    getAllBookAUs:'SELECT * FROM  BookAUs',
    getAllBookAUsByBookId: "SELECT * FROM BookAUs Where BId =@Id",
    getAllBookAUsByUserId: "SELECT * FROM BookAUs Where UsId =@Id",
    getAllBookAUsByReadRoomId: "SELECT * FROM BookAUs Where RRId =@Id",
    addNewBookAUs:"INSERT INTO BookAUs (BId, TakenDate,UsId,RRId) VALUES (@BId, @TakenDate,@UsId,@RRId)",
    deleteBookAUs: 'DELETE FROM [librarydb].[dbo].[BookAUs] Where Id = @Id',
    updateBookAUsById: 'UPDATE BookAUs SET BId = @BId , TakenDate = @TakenDate ,UsId = @UsId ,RRId = @RRId Where Id= @Id',
    //BookSit
    getAllBookSit:'SELECT * FROM  BookSit',
    getAllBookSitById: 'SELECT * FROM BookSit Where Id =@Id',
    getAllBookSitByBookId: "SELECT * FROM BookSit Where BId =@Id",
    getAllBookSitByReadRoomId: "SELECT * FROM BookSit Where RRId =@Id",
    addNewBookSit:"INSERT INTO BookSit (BId,Shelving,RRId,Shelf) VALUES (@BId,@Shelving,@RRId,@Shelf)",
    deleteBookSit: 'DELETE FROM [librarydb].[dbo].[BookSit] Where Id = @Id',
    updateBookSitById: 'UPDATE BookSit SET BId = @BId   ,Shelving = @Shelving ,RRId = @RRId ,Shelf = @Shelf Where Id= @Id',
    //Employer 
    getAllEmployerByReadRoomId: "SELECT * FROM Employer Where RRId =@Id",
    getAllEmployerById: 'SELECT * FROM Employer Where Id =@Id',
    getAllEmployer:'SELECT * FROM  Employer',
    addNewEmployer:"INSERT INTO Employer (AdrId,SName,FName, LName , RRId) VALUES (@AdrId, @SName,@FName, @LName, @RRId)",
    deleteEmployer: 'DELETE FROM [librarydb].[dbo].[Employer] Where Id = @Id',
    updateEmployerById: 'UPDATE Employer SET AdrId = @AdrId ,SName = @SName, FName = @FName , LName = @LName, RRId = @RRId Where Id= @Id',
      //Query 
      getQuery1: `
      select SName,FName , LName, Special from UserA
        LEFT OUTER JOIN AddresW
        ON UserA.AddresW = AddresW.Id
        WHERE Special = @Special
        `,

      getQuery2: `
      select SName, FName, LName, BName, PDate, Publisher,TakenDate From BookAUs
      Left Outer Join Book 
      ON BookAUs.BId = Book.Id
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id
      where Book.BName = @BName`,

      getQuery3:`
      select SName, FName, LName, BName,Publisher, NameT From BookAUs
      Left Outer Join Book 
      ON BookAUs.BId = Book.Id
      Left Outer Join TypeB	 
      ON Book.TId = TypeB.Id
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id
      where Book.Publisher = @Publisher`,

      getQuery4: `select SName, FName, LName, BName, Publisher,TakenDate From BookAUs
      Left Outer Join Book 
      ON BookAUs.BId = Book.Id
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id 
      where BookAUs.TakenDate Between @Date1 and @Date2 
      `,

      getQuery5: `select SName, FName, LName, BName, PDate, Publisher,BookAUs.RRId  From BookAUs
      Left Outer Join Book 
      ON BookAUs.BId = Book.Id
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id
      Left Outer Join UserASub
      ON UserASub.UsId  = UserA.Id 
      where BookAUs.TakenDate Between @Date1 and @Date2  
      and UserA.FName = @FName and UserA.SName = @SName and UserA.LName = @LName 
      and  UserASub.RRId = BookAUs.RRId`,

      getQuery6:`select SName, FName, LName, BName, PDate, Publisher,BookAUs.RRId  From BookAUs
      Left Outer Join Book 
      ON BookAUs.BId = Book.Id
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id
      Left Outer Join UserASub
      ON UserASub.UsId  = UserA.Id 
      where BookAUs.TakenDate Between @Date1 and @Date2  
      and  UserA.FName = @FName and UserA.SName = @SName and UserA.LName = @LName 
      and  UserASub.RRId != BookAUs.RRId`,

      getQuery7: `select distinct BName  From BookSit
      Left Outer Join Book 
      ON BookSit.BId = Book.Id
      Left Outer Join  ReadRoom
      ON ReadRoom.Id = BookSit.RRId 
      where BookSit.Shelf = @Shelf and ReadRoom.LId = @Id `,

      getQuery8: `select UserA.FName, UserA.SName,UserA.LName, Employer.FName, Employer.SName, Employer.LName, BookAUs.TakenDate From BookAUs
      Left Outer Join UserA 
      ON BookAUs.UsId = UserA.Id
      Left Outer Join Employer
      ON Employer.RRId  = BookAUs.RRId 
      where Employer.FName = @FName and Employer.SName = @SName and Employer.LName = @LName  and
      BookAUs.TakenDate Between @Date1 and @Date2
      `,

      getQuery9:`select distinct Employer.FName, Employer.SName, Employer.LName, Employer.RRId From Employer
      Left Outer Join ReadRoom
      ON Employer.RRId = ReadRoom.Id
      where ReadRoom.LId = @Id and ReadRoom.Number = @Number
      `,

      getQuery10:`
      select Book.BName, BookSit.Shelving,BookSit.RRId, BookSit.Shelf From BookSit
      Left Outer Join Book 
      ON BookSit.BId = Book.Id
      where Book.BName = @Name
      `,
}