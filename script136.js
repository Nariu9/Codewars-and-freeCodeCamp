class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage)
    }

    itemCount() {
        return this.collection.length
    }

    pageItemCount(index) {
        const arrOfPages = []
        for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
            arrOfPages.push(this.collection.slice(i, i + this.itemsPerPage))
        }
        return arrOfPages[index] ? arrOfPages[index].length : -1
    }

    pageIndex(index) {
        return index <= this.collection.length - 1 && index >= 0 ? Math.ceil(++index/this.itemsPerPage) -1 : -1
    }
}

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)


console.log(helper.pageCount())
console.log(helper.itemCount())
console.log(helper.pageItemCount(0))
console.log(helper.pageItemCount(1))
console.log(helper.pageItemCount(-2))
console.log(helper.pageIndex(5))
console.log(helper.pageIndex(2))
console.log(helper.pageIndex(20))
console.log(helper.pageIndex(-10))