<?php

namespace App\Domain\UserGames;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGame extends Model
{
    use HasFactory;
    public function games()
    {
        return $this->hasMany(Game::class, 'id', 'game_id');
    }
}
