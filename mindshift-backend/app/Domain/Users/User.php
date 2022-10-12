<?php
namespace App\Domain\Users;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function companies()
    {
        return $this->belongsTo(Company::class);
    }

    public function levels()
    {
        return $this->belongsToMany(Level::class);
    }

    public function achievments()
    {
        return $this->belongsToMany(Achievment::class);
    }

    public function rewards()
    {
        return $this->belongsToMany(Reward::class);
    }

    public function groups()
    {
        return $this->belongsTo(Group::class);
    }
    public function gainedRewards()
    {
        return $this->hasMany(GainedReward::class);
    }
    public function games()
    {
        return $this->hasMany(UserGame::class);
    }
}