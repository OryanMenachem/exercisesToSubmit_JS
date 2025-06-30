// exercise 1


class MediaItem {

    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    getSummary() {

        console.log(`title: ${this.title}, year: ${this.year}, genre: ${this.genre}`);
        
    }
}

class Book extends MediaItem {

    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre)
        this.author = author;
        this.pageCount = pageCount;
    }

        getSummary() {

        console.log(`title: ${this.title}, year: ${this.year}, genre: ${this.genre}, author: ${this.author}, pageCount: ${this.pageCount}`);
        
    }

}

class Movie extends MediaItem {

    constructor(title, year, genre, director, durationMinutes) {
        super(title, year, genre)
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

        getSummary() {

        console.log(`title: ${this.title}, year: ${this.year}, genre: ${this.genre}, director: ${this.director}, durationMinutes: ${this.durationMinutes}`);
        
    }

}


class Library {

    items = [];
    
    addItem(item) {

        this.items.push(item);
    }

    search(term) {

        this.result = [];

        for (const item of this.items) {

            if (item.title == term ) {

                this.result.push(item)
            }

        }
        
        return this.result;
    }
        
        
    listByGenre(genre) {

         this.result = [];

        for (const item of this.items) {

            if (item.genre == genre) {

                this.result.push(item);

            }

        }
        return this.result;
    }


}


const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert" , 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));
console.log(lib.search("Dune"));
console.log(lib.listByGenre("Sci-Fi"));