import React, { createElement, useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify'
import axios from 'axios';


const RegisterTeacher = () => {

    const [fullName, setFullName] = useState("")
    const [field, setField] = useState([])
    const [specialisation, setSpecialisation] = useState("")
    const [experience, setExperience] = useState("1")
    const [qualifications, setQualifications] = useState("")
    const [achievements, setAchievements] = useState("")
    const [contact, setContact] = useState("")

    const [todo, setTodo] = useState("") //tag
    const [todos1, setTodos1] = useState([]) //tags
    const [todos2, setTodos2] = useState([]) //tags
    const [todos3, setTodos3] = useState([]) //tags

    const [todoswithkeys1, setTodoswithkeys1] = useState([]) //tags



    useEffect(() => {

        // let todos1 = ["6th-Mathematics", "6th-Science", "6th-SocialScience", "6th-English", "6th-English", "6th-English", "6th-English"]
        // let mappedTodos = todos1.map((todo, index) => {
        //     return { id: `${index}`, todo }
        // })
        // console.log('Mapped Todos:', mappedTodos);
        // setTodoswithkeys1(mappedTodos) //this will set the value of todos as 'todoswithkeys'


        // let todos2 = ["7th-Mathematics", "7th-Science", "7th-SocialScience"]
        // let todoswithkeys2 = todos2.map((todo, index) => {
        //     return { id: `${index}`, todo }
        // })
        // setTodos2(todoswithkeys2) //this will set the value of todos as 'todoswithkeys'
        // console.log(todoswithkeys2)

        // let todos3 = ["8th-Mathematics", "8th-Science", "8th-SocialScience"]
        // let todoswithkeys3 = todos3.map((todo, index) => {
        //     return { id: `${index}`, todo }
        // })
        // setTodos3(todoswithkeys3) //this will set the value of todos as 'todoswithkeys'
        // console.log(todoswithkeys3)
    }, [])

    //  todos = ["6th-Mathematics", "6th-Science", "6th-SocialScience"]
    // setTodos(todos)

    const handleregisterteacher = () => {
        try {
            const selectedtags = getselectedtags()
            const response = axios.post("http://localhost:4000/api/v1/teacher/register-teacher", { fullName, field: selectedtags, specialisation, experience, qualifications, achievements, contact },
                {
                    withCredentials: true,
                    headers:{"Content-Type":"application/json"}
                }
            );
            // console.log("this is field", field)
            toast.success(response.data.message)
            Navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const getselectedtags = () => {
        const inputbar = document.getElementById('input')
        // const cross = document.getElementsByClassName('crossbtn')
        // const alltags = Array.from(inputbar.getElementsByClassName('tag'))
        // const alltags = inputbar.getElementsByClassName('tag')
        const alltags = inputbar.children


        return Array.from(alltags).map(tag => {
            return tag.textContent.replace(' ✖', '').trim();
        })

        
        // console.log("this is field:", field)
        // console.log(tag)
    }


    


    // const movebacktoorangebox = (tagu) => {
    //     console.log("reached orange box again")
        
    //     tagu.removeEventListener("click", function() {
    //         movebacktoorangebox(tagu);
    //       });

    //     tagu.parentNode.removeChild(tagu)          
    //     // Remove previous click event to prevent multiple bindings
    //     // tagu.onclick = null

    //     const tags = document.querySelector("#input")
    //     tags.appendChild(tagu)

    //     const crossSymbol1 = document.createElement("span")
    //     crossSymbol1.innerHTML = "  ✖"
    //     tagu.appendChild(crossSymbol1)

    //     crossSymbol1.addEventListener("click", () => {
    //         tags.removeChild(tagu)
    //         tagu.removeChild(crossSymbol)
    //         movetobluebox(tagu)
    //     })
    // }

    // const movetobluebox = async(tag) => {
    //     console.log("reached the function movetobluebox")

    //     // tag.parentNode.removeChild(tag)

    //     console.log("tag reached here")


    //     const bluebox = document.querySelector("#class6")
    //     await bluebox.appendChild(tag)

    //     console.log("tag reached blue box")

    //     console.log(tag.innerHTML)

    //     const text = tag.innerHTML

    //     const textbox = document.createElement("span")
    //     textbox.innerText = text
    //     console.log("textbox:", textbox)

        

    //     tag.addEventListener("click", () => {
    //             movebacktoorangebox(textbox)
    //     })
        
    // }

    const handletagbuttons1 = (e, id) => {
        // //  METHOD 1:-
        const inputbar = document.getElementById('input')
        // const inputbar = document.getElementsByTagName('input')
        const button = document.getElementById('buttonbabu')
        

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"

        // getselectedtags()

        // METHOD 2:-

        // // **************************************this is the code of picking up the tag and placing it on the above box

        // let t = todoswithkeys1.filter(i => i.id === id)
        // // let t = todoswithkeys1.filter(i => i.id === id)
        // console.log('Filtering for ID:', id);
        // console.log("this is t")
        // // console.log("id:", id)
        // // console.log(t)
        // console.log('Filtered Result:', t);

        // const todospan = document.createElement("span")
        // todospan.className = "tag" //tag is in index.css

        // const newt = document.createTextNode(t[0].todo)
        // // console.log(t[0].todo)
        // todospan.appendChild(newt)

        // const crossSymbol = document.createElement("span")
        // crossSymbol.innerHTML = "  ✖"
        // todospan.appendChild(crossSymbol)



        // const tags = document.querySelector("#input")
        // tags.appendChild(todospan)
        // // tags.innerHTML += t[0].todo
        // // ****************************************************


        // // *************************************************deletion code(delete/remove that tag from the list of tags):-
        // const newtodos = todoswithkeys1.filter(item => {
        //     return item.id !== id
        // })
        // setTodoswithkeys1(newtodos)
        // // console.log(newtodos)

        // // crossSymbol.addEventListener("click", () => {
        // //     // setTodos1([...newtodos, t[0].todo])

        // //     setTodos1([...newtodos, t[0]])

        // // })

        // // const class6box = document.querySelector("#class6")
        // // const textsubject = document.createElement("span")

        // // const newt2 = document.createTextNode(t[0].todo)
        // // textsubject.appendChild(newt2)

        // // textsubject.className = "tag"

        // crossSymbol.addEventListener("click", (i) => {
        //     tags.removeChild(todospan)
        //     todospan.removeChild(crossSymbol)
        //     movetobluebox(todospan)
        //     // todospan.parentNode.removeChild(todospan)

        //     // crossSymbol.parentNode.removeChild(crossSymbol)

        //     // const finaltodos = newtodos.concat(t[0]) // this is same as [...newtodos, t]
        //     // setTodoswithkeys1(finaltodos)


        // })
    }

    const handletagbuttons2 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu1')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    // const handletagbuttons3 = (e, id) => {
    //     let t = todos3.filter(i => i.id === id)
    //     console.log(t)
    //     const tags = document.querySelector("#input")
    //     tags.innerHTML += t[0].todo

    //     // deletion code:-
    //     const newtodos = todos3.filter(item => {
    //         return item.id !== id
    //     })
    //     setTodos3(newtodos)
    //     console.log(newtodos)
    // }

    const handletagbuttons3 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu2')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    const handletagbuttons4 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu3')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    const handletagbuttons5 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu4')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    const handletagbuttons6 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu5')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    const handletagbuttons7 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu6')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    const handletagbuttons8 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu7')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons9 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu8')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons10 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu9')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons11 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu10')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons12 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu11')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons13 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu12')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons14 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu13')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons15 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu14')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons16 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu15')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons17 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu16')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons18 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu17')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons19 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu18')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons20 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu19')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons21 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu20')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons22 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu21')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons23 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu22')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons24 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu23')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons25 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu24')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons26 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu25')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons27 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu26')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons28 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu27')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons29 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu28')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons30 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu29')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons31 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu30')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons32 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu31')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons33 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu32')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons34 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu33')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons35 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu34')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons36 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu35')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons37 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu36')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons38 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu37')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons39 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu38')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons40 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu39')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons41 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu40')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }
    const handletagbuttons42 = (e, id) => {
        const inputbar = document.getElementById('input')
        const button = document.getElementById('buttonbabu41')

        // inputbar.style.backgroundColor = "white"

        const newtag = document.createElement('span')
        newtag.className = "tag"
        newtag.innerText = button.innerText

        const removecrossbutton = document.createElement('span')
        // removecrossbutton.className = "crossbtn"
        removecrossbutton.innerText = ' ✖'

        removecrossbutton.addEventListener('click', (e) => {
            e.stopPropagation()
            inputbar.removeChild(newtag)
            button.style.display = "inline-block"

        })

        newtag.appendChild(removecrossbutton)
        inputbar.appendChild(newtag)
        button.style.display = "none"
    }

    return (
        <div className='bg-[#0D0D0D]'>

            {/* fullName, field, specialisation, experience, qualifications, achievements, contact */}
            <div className=' text-[#B8A895] flex flex-col items-center pt-[40px] w-[70vw] ml-[15vw]'>
                <div className='tracking-[15px] mb-[100px] '>register as a teacher</div>
                <form onSubmit={handleregisterteacher}>


                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>FULLNAME</div>
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>

                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>FIELD</div>
                        {/* <input type="text" value={todo}  className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' /> */}
                        <div id='input' value={field} onChange={(e) => setField(e.target.value)} className='w-[50vw] flex flex-wrap  min-h-[7vh] bg-[#0D0D0D] border-[2px] p-1 pt-2 pb-2 border-[#E94B35]  rounded-md'></div>
                        <div id='tagbox' className="items mt-[20px] border-[1px] rounded-md border-white h-[300px] w-[678px] overflow-y-auto scroll-smooth">
                            <div className="class6 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 6</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons1()} id='buttonbabu' className='tag'>6th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons2()} id='buttonbabu1' className='tag'>6th-Science</div>
                                    <div onClick={(e) => handletagbuttons3()} id='buttonbabu2' className='tag'>6th-Social Science</div>
                                    
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons4()} id='buttonbabu3' className='tag'>6th-English </div>
                                    <div onClick={(e) => handletagbuttons5()} id='buttonbabu4' className='tag'>6th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons6()} id='buttonbabu5' className='tag'>6th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>


                            <div className="class7 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 7</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons7()} id='buttonbabu6' className='tag'>7th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons8()} id='buttonbabu7' className='tag'>7th-Science</div>
                                    <div onClick={(e) => handletagbuttons9()} id='buttonbabu8' className='tag'>7th-Social Science</div>
                                    
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons10()} id='buttonbabu9' className='tag'>7th-English </div>
                                    <div onClick={(e) => handletagbuttons11()} id='buttonbabu10' className='tag'>7th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons12()} id='buttonbabu11' className='tag'>7th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>


                            <div className="class8 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 8</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons13()} id='buttonbabu12' className='tag'>8th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons14()} id='buttonbabu13' className='tag'>8th-Science</div>
                                    <div onClick={(e) => handletagbuttons15()} id='buttonbabu14' className='tag'>8th-Social Science</div>
                                   
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons16()} id='buttonbabu15' className='tag'>8th-English </div>
                                    <div onClick={(e) => handletagbuttons17()} id='buttonbabu16' className='tag'>8th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons18()} id='buttonbabu17' className='tag'>8th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>
                            <div className="class9 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 9</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons19()} id='buttonbabu18' className='tag'>9th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons20()} id='buttonbabu19' className='tag'>9th-Science</div>
                                    <div onClick={(e) => handletagbuttons21()} id='buttonbabu20' className='tag'>9th-Social Science</div>
                                    
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons22()} id='buttonbabu21' className='tag'>9th-English </div>
                                    <div onClick={(e) => handletagbuttons23()} id='buttonbabu22' className='tag'>9th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons24()} id='buttonbabu23' className='tag'>9th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>
                            <div className="class10 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 10</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons25()} id='buttonbabu24' className='tag'>10th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons26()} id='buttonbabu25' className='tag'>10th-Science</div>
                                    <div onClick={(e) => handletagbuttons27()} id='buttonbabu26' className='tag'>10th-Social Science</div>
                                   
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons28()} id='buttonbabu27' className='tag'>10th-English </div>
                                    <div onClick={(e) => handletagbuttons29()} id='buttonbabu28' className='tag'>10th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons30()} id='buttonbabu29' className='tag'>10th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>
                            <div className="class11 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 11</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons31()} id='buttonbabu30' className='tag'>11th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons32()} id='buttonbabu31' className='tag'>11th-Science</div>
                                    <div onClick={(e) => handletagbuttons33()} id='buttonbabu32' className='tag'>11th-Social Science</div>
                                    
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons34()} id='buttonbabu33' className='tag'>11th-English </div>
                                    <div onClick={(e) => handletagbuttons35()} id='buttonbabu34' className='tag'>11th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons36()} id='buttonbabu35' className='tag'>11th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>
                            <div className="class12 p-2"> 
                                <div className='text-white tracking-[4px] font-normal'>Class 12</div>
                                <div className='flex flex-row gap-2 '>
                                    <div onClick={(e) => handletagbuttons37()} id='buttonbabu36' className='tag'>12th-Mathematics</div> {/*bg-yellow-300 h-[40px]  text-black w-[140px] text-start rounded-md flex flex-row items-center p-1 font-bold*/}
                                    <div onClick={(e) => handletagbuttons38()} id='buttonbabu37' className='tag'>12th-Science</div>
                                    <div onClick={(e) => handletagbuttons39()} id='buttonbabu38' className='tag'>12th-Social Science</div>
                                    
                                    
                                    
                                </div>
                                <div className='flex flex-row gap-2 mt-[10px]'>
                                <div onClick={(e) => handletagbuttons40()} id='buttonbabu39' className='tag'>12th-English </div>
                                    <div onClick={(e) => handletagbuttons41()} id='buttonbabu40' className='tag'>12th-Hindi</div>
                                    <div onClick={(e) => handletagbuttons42()} id='buttonbabu41' className='tag'>12th-Sanskrit</div>
                                    
                                    
                                </div>
                            </div>
                            
                           
                            {/* <div>
                                <div>Class 6</div>
                                <div id='class6'>
                                    {todoswithkeys1.map(item => {
                                        return <span id='buttonbabu' onClick={(e) => handletagbuttons1(e, item.id)} key={item.id} className='bg-blue-950 h-[40px]  text-white w-[140px] text-start rounded-md items-center p-1 ml-[5px] mr-[5px] font-bold'>{item.todo}</span>

                                    })}
                                </div>
                            </div> */}

                            {/* <div>
                                <div>Class 7</div>
                                {todos2.map(item => {
                                    return <span onClick={(e) => handletagbuttons2(e, item.id)} key={item.id} className='text-white'>{item.todo}</span>

                                })}
                            </div> */}

                            {/* <div>
                                <div>Class 8</div>
                                {todos3.map(item => {
                                    return <span onClick={(e) => handletagbuttons3(e, item.id)} key={item.id} className='text-white'>{item.todo}</span>

                                })}
                            </div> */}



                        </div>
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>SPECIALISATION</div>
                        <input type="text" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>EXPERIENCE</div>
                        <select value={experience} onChange={(e) => setExperience(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md'>
                            <option value="1">0-1 years</option>
                            <option value="2">1-3 years</option>
                            <option value="3">3-5 years</option>
                            <option value="4">5-10 years</option>
                            <option value="5">10+ years</option>
                        </select>
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>QUALIFICATION</div>
                        <input type="text" value={qualifications} onChange={(e) => setQualifications(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>ACHIEVEMENTS</div>
                        <input type="text" value={achievements} onChange={(e) => setAchievements(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>
                    <div className='mb-[40px]'>
                        <div className='text-[35px] font-semibold tracking-[-2px] mb-[-10px]'>CONTACT</div>
                        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className='w-[50vw] h-[7vh] bg-[#0D0D0D] border-[2px] border-[#E94B35]  rounded-md' />
                    </div>

                </form>

                <div onClick={(e) => handleregisterteacher()} className='button bg-[#E94B35] w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>lets go</div>
            </div>

            <div className='text-[120px] text-[#B8A895] tracking-[-5px] font-semibold bottom-0 left'>
                <div className='mb-[-90px]'>Be</div>
                <div className='mb-[-50px]'>a part</div>
            </div>
        </div>
    )
}

export default RegisterTeacher