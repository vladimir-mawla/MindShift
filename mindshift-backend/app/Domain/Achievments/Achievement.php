<?php

namespace App\Domain\Achievments;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
