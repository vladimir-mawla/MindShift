<?php

namespace App\Domain\Questions;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    public function games()
    {
        return $this->belongsTo(Game::class);
    }

    public function answers()
    {
        return $this->belongsTo(Answer::class);
    }

    public function question_options()
    {
        return $this->hasMany(QuestionOption::class);
    }
}
