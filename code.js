
//СВІЙ РОЗПОРЯДОК ДНЯ,ЗАСТОСОВУЮЧИ CALLBACK,PROMISE,ASYNC AWAIT

////////////////////////////////////////////////////CALLBACK///////////////////////////////////////////

// function wakeUp(isIWakeUp, cb) {
//     setTimeout(() => {
//         if (isIWakeUp) {
//             cb(null, 'I wake up,cool')
//         } else {
//             cb('I want to sleep,dont touch me')
//         }
//     }, 1000)
// }
//
// function brushTeeth(isIBrushTeeth, cb) {
//     setTimeout(() => {
//         if (isIBrushTeeth) {
//             cb(null, 'Cool, my teeth are clean')
//         } else {
//             cb('I am too lazy to brush my teeth')
//         }
//     }, 2000)
// }
//
// function haveLunch(isIHaveLunch, cb) {
//     setTimeout(() => {
//         if (isIHaveLunch) {
//             cb(null, 'Great, I had lunch')
//         } else {
//             cb('I do not want eat,i am not hungry')
//         }
//     }, 2500)
// }
//
// function doToCollege(IsIGo, cb) {
//     setTimeout(() => {
//         if (IsIGo) {
//             cb(null, 'Oh no ... I need to study')
//         } else {
//             cb('Hooray, I have a day off')
//         }
//     }, 4000)
// }
//
// function goWalk(isIGoWalk, cb) {
//     setTimeout(() => {
//         if (isIGoWalk) {
//             cb(null, 'I walked with friends, cool')
//         } else {
//             cb('I do not have time to walk,i have a lot of homework')
//         }
//     }, 3000)
// }
//
// function toDoHomework(isIDoHW, cb) {
//     setTimeout(() => {
//         if (isIDoHW) {
//             cb(null, 'Finally, I did all the homework')
//         } else {
//             cb('I was not given a homework')
//         }
//     },2500)
// }
//
// function goToSleep(isIGoSleep, cb) {
//     setTimeout(() => {
//         if (isIGoSleep) {
//             cb(null, 'Finally i go to bed i am very tired')
//         } else {
//             cb('I do not want to sleep, i go watch a film')
//         }
//     }, 1500)
// }
//
// wakeUp(true, (err, success) => {
//     if (!err) {
//         console.log(success)
//         brushTeeth(true, (err, success) => {
//             if (!err) {
//                 console.log(success);
//                 haveLunch(true, (err, success) => {
//                     if (!err) {
//                         console.log(success)
//                         doToCollege(true, (err, success) => {
//                             if (!err) {
//                                 console.log(success);
//                                 goWalk(true, (err, success) => {
//                                     if (!err) {
//                                         console.log(success);
//                                         toDoHomework(true, (err, success) => {
//                                             if (!err) {
//                                                 console.log(success)
//                                                 goToSleep(true, (err, success) => {
//                                                     if (!err) {
//                                                         console.log(success)
//                                                     } else {
//                                                         console.warn(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.warn(err)
//                                             }
//                                         })
//                                     } else {
//                                         console.warn(err)
//                                     }
//                                 })
//                             } else {
//                                 console.warn(err)
//                             }
//                         })
//                     } else {
//                         console.warn(err)
//                     }
//                 })
//             } else {
//                 console.warn(err)
//             }
//         })
//     } else {
//         console.warn(err)
//     }
// })



////////////////////////////////////////////////PROMISE///////////////////////////////////////////////////////////

// function wakeUp(isIWakeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIWakeUp) {
//                 resolve('I wake up,cool');
//             } else {
//                 reject('I want to sleep,dont touch me');
//             }
//         }, 1000)
//     })
//
// }
// function brushTeeth(isIBrushTeeth) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIBrushTeeth) {
//                 resolve('Cool, my teeth are clean')
//             } else {
//                 reject('I am too lazy to brush my teeth')
//             }
//         }, 2000)
//     })
//
// }
//
// function haveLunch(isIHaveLunch) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIHaveLunch) {
//                 resolve('Great, I had lunch')
//             } else {
//                 reject('I do not want eat,i am not hungry')
//             }
//         }, 2500)
//     })
//
// }
//
// function doToCollege(IsIGo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (IsIGo) {
//                 resolve('Oh no ... I need to study')
//             } else {
//                reject('Hooray, I have a day off')
//             }
//         }, 4000)
//     })
//
// }
//
// function goWalk(isIGoWalk) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIGoWalk) {
//                resolve( 'I walked with friends, cool')
//             } else {
//                 reject('I do not have time to walk,i have a lot of homework')
//             }
//         }, 3000)
//     })
//
// }
//
// function toDoHomework(isIDoHW) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIDoHW) {
//                 resolve('Finally, I did all the homework')
//             } else {
//                 reject('I was not given a homework')
//             }
//         },2500)
//     })
//
// }
//
// function goToSleep(isIGoSleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isIGoSleep) {
//                 resolve('Finally i go to bed i am very tired')
//             } else {
//                 reject('I do not want to sleep, i go watch a film')
//             }
//         }, 1500)
//     })
//
// }
// wakeUp(true).then(value => {
//     console.log(value);
//     return brushTeeth(true);
// })
//     .then(value => {
//         console.log(value);
//         return haveLunch(true);
//     })
//     .then(value => {
//         console.log(value)
//         return doToCollege(true)
//     })
//     .then(value => {
//         console.log(value);
//         return goWalk(true);
//     })
//     .then(value => {
//         console.log(value);
//         return toDoHomework(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goToSleep(true);
//     })
//     .then(value => {
//         console.log(value)
//     })


/////////////////////////////////////////////ASYNC AWAIT////////////////////////////////////////////////////

function wakeUp(isIWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIWakeUp) {
                resolve('I wake up,cool');
            } else {
                reject('I want to sleep,dont touch me');
            }
        }, 1000)
    })

}
function brushTeeth(isIBrushTeeth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIBrushTeeth) {
                resolve('Cool, my teeth are clean')
            } else {
                reject('I am too lazy to brush my teeth')
            }
        }, 2000)
    })

}

function haveLunch(isIHaveLunch) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIHaveLunch) {
                resolve('Great, I had lunch')
            } else {
                reject('I do not want eat,i am not hungry')
            }
        }, 2500)
    })

}

function doToCollege(IsIGo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (IsIGo) {
                resolve('Oh no ... I need to study')
            } else {
                reject('Hooray, I have a day off')
            }
        }, 4000)
    })

}

function goWalk(isIGoWalk) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIGoWalk) {
                resolve( 'I walked with friends, cool')
            } else {
                reject('I do not have time to walk,i have a lot of homework')
            }
        }, 3000)
    })

}

function toDoHomework(isIDoHW) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIDoHW) {
                resolve('Finally, I did all the homework')
            } else {
                reject('I was not given a homework')
            }
        },2500)
    })

}

function goToSleep(isIGoSleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIGoSleep) {
                resolve('Finally i go to bed i am very tired')
            } else {
                reject('I do not want to sleep, i go watch a film')
            }
        }, 1500)
    })

}
async function mySk(){
    let wake= await wakeUp(true);
    console.log(wake);
    let teeth=await brushTeeth(true);
    console.log(teeth);
    let lunch= await haveLunch(true);
    console.log(lunch);
    let college=await doToCollege(true);
    console.log(college);
    let walk=await goWalk(true);
    console.log(walk);
    let homework=await toDoHomework(true);
    console.log(homework);
    let sleep=await goToSleep(true);
    console.log(sleep);

}

mySk();