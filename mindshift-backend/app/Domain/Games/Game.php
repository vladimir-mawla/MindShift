<?php

namespace App\Domain\Games;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
