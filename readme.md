Convert an array to a static, unchanging cicular linked list

## Usage

    import LinkedList from "array-to-circular-linkedlist";
    const array = [1,2,3];
    const list = new LinkedList(array);
    console.log(list.next()) // prints 1
    console.log(list.next()) // prints 2
    console.log(list.next()) // prints 3
    console.log(list.next()) // prints 1
