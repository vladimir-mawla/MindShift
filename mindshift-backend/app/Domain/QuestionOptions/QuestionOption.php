<?php

namespace App\Domain\QuestionOptions;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionOption extends Model
{
    use HasFactory;

    public function questions()
    {
        return $this->belongsTo(Question::class);
    }
}
