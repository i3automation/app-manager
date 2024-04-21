const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/stop_a111', (req, res) => {
    exec('scripts/stop_a1111.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping A1111: ${error}`);
        }
    });

    res.send('Stopped A1111 successfully!');
});

app.get('/stop_automatic', (req, res) => {
    exec('scripts/stop_automatic.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping Automatic: ${error}`);
        }
    });

    res.send('Stopped Automatic successfully!');
});


app.get('/start_a1111', (req, res) => {
    exec('scripts/start_a1111.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting A1111: ${error}`);
        }
    });

    res.send('Started A1111 successfully!');
});


app.get('/start_automatic', (req, res) => {
    exec('scripts/start_automatic.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Automatic: ${error}`);
        }
    });

    res.send('Started Automatic successfully!');
});

app.get('/stop_kohya', (req, res) => {
    exec('scripts/stop_kohya.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping Lora Trainer: ${error}`);
        }
    });

    res.send('Stopped Lora Trainer successfully!');
});

app.get('/start_kohya', (req, res) => {
    exec('scripts/start_kohya.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Lora Trainer: ${error}`);
        }
    });

    res.send('Started Lora Trainer successfully!');
});

app.get('/stop_comfyui', (req, res) => {
    exec('scripts/stop_comfyui.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping ComfyUI: ${error}`);
        }
    });

    res.send('Stopped ComfyUI successfully!');
});

app.get('/start_comfyui', (req, res) => {
    exec('scripts/start_comfyui.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting ComfyUI: ${error}`);
        }
    });

    res.send('Started ComfyUI successfully!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
