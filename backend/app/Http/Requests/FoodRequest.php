<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FoodRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'food_name' => 'required|string|max:100',
            'food_description' => 'required|string',
            'food_image' => 'nullable|url',
            'food_category' => 'required|string|in:sarapan,makan_siang,makan_malam,snack',
            'nutrition.calories' => 'required|numeric|min:0',
            'nutrition.protein' => 'required|numeric|min:0',
            'nutrition.carbs' => 'required|numeric|min:0',
            'nutrition.fat' => 'required|numeric|min:0',
            'ingredients' => 'required|array',
            'ingredients.*' => 'string',
            'preparation_time' => 'required|numeric|min:1',
            'difficulty_level' => 'required|string|in:mudah,sedang,sulit',
            'recipe.ingredients_detail' => 'required|array',
            'recipe.ingredients_detail.*.name' => 'required|string',
            'recipe.ingredients_detail.*.amount' => 'required|numeric|min:1',
            'recipe.ingredients_detail.*.unit' => 'required|string',
            'recipe.instructions' => 'required|array',
            'recipe.instructions.*' => 'string',
            'recipe.serving_size' => 'required|numeric|min:1',
            'stock' => 'required|numeric|min:0',
            'min_order' => 'required|numeric|min:1',
            'is_available' => 'required|boolean',
            'discount_percentage' => 'nullable|numeric|min:0|max:100',
            'original_price' => 'required|numeric|min:0',
            'final_price' => 'required|numeric|min:0',
            'weight' => 'required|numeric|min:0',
        ];
    }

    public function messages()
    {
        return [
            'food_name.required' => 'Nama makanan wajib diisi',
            'food_description.required' => 'Deskripsi makanan wajib diisi',
            'food_category.required' => 'Kategori makanan wajib diisi',
            'nutrition.calories.required' => 'Kalori wajib diisi',
            'nutrition.protein.required' => 'Protein wajib diisi',
            'nutrition.carbs.required' => 'Karbohidrat wajib diisi',
            'nutrition.fat.required' => 'Lemak wajib diisi',
            'ingredients.required' => 'Bahan-bahan wajib diisi',
            'preparation_time.required' => 'Waktu persiapan wajib diisi',
            'difficulty_level.required' => 'Tingkat kesulitan wajib diisi',
            'recipe.ingredients_detail.required' => 'Detail bahan resep wajib diisi',
            'recipe.instructions.required' => 'Instruksi resep wajib diisi',
            'recipe.serving_size.required' => 'Porsi wajib diisi',
            'stock.required' => 'Stok wajib diisi',
            'min_order.required' => 'Minimal pemesanan wajib diisi',
            'is_available.required' => 'Status ketersediaan wajib diisi',
            'original_price.required' => 'Harga asli wajib diisi',
            'final_price.required' => 'Harga akhir wajib diisi',
            'weight.required' => 'Berat wajib diisi',
        ];
    }
} 