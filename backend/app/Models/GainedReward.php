<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GainedReward extends Model
{
    use HasFactory;
    public function rewards()
{
    return $this->hasMany(Reward::class, 'id', 'reward_id');
}
}
