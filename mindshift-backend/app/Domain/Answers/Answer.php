<?php

namespace App\Domain\Answers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    public function questions()
    {
        return $this->hasOne(Question::class, 'id', 'question_id');
    }
}
