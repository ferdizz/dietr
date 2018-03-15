Nutrition logger
------------------------------
Main page / Overview:
- Title / Date (+ change date)
- Your intake overview:
  - KCAL goal
  - KCAL eaten / left
  - Protein eaten / left
  - Fat eaten / left
  - Carbs eaten / left
  - Vitamins overview?
- Add food (search bar):
  - Present food card.
  - If no data found, create new card.
  - Save / Remove card.
- Browse food (new page?)

Routes and Endpoints:
- GET /api/foods/ Return all food
- GET /api/foods/{id} Return food with matching id
- PUT /api/foods/{id} Update food with matching id
- DEL /api/foods/{id} Delete food with matching id
