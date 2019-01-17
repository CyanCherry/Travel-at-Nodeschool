first()
    .then((value) =>
        second(value)
    )
    .then((value) =>
        console.log(value)
    );