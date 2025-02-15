import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@material-ui/core';

function EggBatchRegistration() {
  const [eggBatch, setEggBatch] = useState({
    type: '',
    date: '',
    time: '',
    quantity: '',
    supplier: '',
    notes: '',
    temperature: '',
    timeTo1g: '',
    mortality: '',
  });

  const handleChange = (e) => {
    setEggBatch({
      ...eggBatch,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data: ', eggBatch);
    // Здесь можно подключить вызов API для сохранения данных
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>
        Регистрация партии икры
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Тип икры</InputLabel>
        <Select name="type" value={eggBatch.type} onChange={handleChange} required>
          <MenuItem value="diploid">Диплоид</MenuItem>
          <MenuItem value="triploid">Триплоид</MenuItem>
          <MenuItem value="amber">Янтарная</MenuItem>
        </Select>
      </FormControl>
      <TextField 
        label="Дата закладки" 
        type="date" 
        name="date" 
        fullWidth 
        margin="normal" 
        InputLabelProps={{ shrink: true }} 
        value={eggBatch.date} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Время закладки" 
        type="time" 
        name="time" 
        fullWidth 
        margin="normal" 
        InputLabelProps={{ shrink: true }} 
        value={eggBatch.time} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Количество икры (шт.)" 
        type="number" 
        name="quantity" 
        fullWidth 
        margin="normal" 
        value={eggBatch.quantity} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Поставщик" 
        name="supplier" 
        fullWidth 
        margin="normal" 
        value={eggBatch.supplier} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Примечания" 
        name="notes" 
        fullWidth 
        margin="normal" 
        multiline 
        rows={3} 
        value={eggBatch.notes} 
        onChange={handleChange} 
      />

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Параметры инкубации
      </Typography>
      <TextField 
        label="Температура инкубатора" 
        type="number" 
        name="temperature" 
        fullWidth 
        margin="normal" 
        value={eggBatch.temperature} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Время до достижения 1 г (дней)" 
        type="number" 
        name="timeTo1g" 
        fullWidth 
        margin="normal" 
        value={eggBatch.timeTo1g} 
        onChange={handleChange} 
        required
      />
      <TextField 
        label="Смертность (точное или приблизительное)" 
        name="mortality" 
        fullWidth 
        margin="normal" 
        value={eggBatch.mortality} 
        onChange={handleChange} 
      />

      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
        Сохранить
      </Button>
    </form>
  );
}

export default EggBatchRegistration;
