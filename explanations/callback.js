// Simulación del uso de callbacks a una base de datos.
// Callback hell
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if (err) {
            return res.send(err);
        } else {
            Task.findById(user.taskId, function(err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Tarea Completada')
                        }

                    })
                }
            })
        }
    })
}