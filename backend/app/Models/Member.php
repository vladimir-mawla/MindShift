<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    public function groups()
    {
        return $this->belongsTo(Group::class);
    }

    public function users()
    {
        return $this->hasMany(User::class, 'user_id', 'id');
    }
}
