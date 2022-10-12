<?php

namespace App\Domain\Leaderboards;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->hasMany(Users::class);
    }
}
