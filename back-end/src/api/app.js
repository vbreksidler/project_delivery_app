require('express-async-errors');
const express = require('express');
const { userRoute, loginRoute, registerRoute, 
  salesRoute, productRouter } = require('../routes');

const app = express();
app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/sales', salesRoute);
app.use('/products', productRouter);

app.use((error, _req, res, _next) => {
    const { cause, message } = error;
    if (!cause) return res.status(500).json({ message });
    return res.status(cause).json({ message });
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
