<?php

namespace Tests\Feature;

use App\Models\Canal;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CanalTest extends TestCase
{
    /**
     * test for canals
     */
    public function test_get_all_canals_check_structure(): void
    {
        $response = $this->get('/api/canals')->
        assertStatus(200)
        ->assertJsonStructure(
            [
                'data' => [
                    '*' =>[
                            'id',
                            'name',
                            'amount',
                            'created_at',
                            'updated_at',
                    ]
                ]

            ]
        );
    }

    public function test_get_canal_not_existed(): void
    {
        $response = $this->get('/api/canals/'."sdsd")->
        assertStatus(404);

    }

    public function test_create_canal_with_existing_name(): void
    {

        $name_exist = Canal::inRandomOrder()->first()->name;

        $canal =
        [
            'name' => $name_exist,
            'amount' => random_int(0, 10000),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];


        $this->json('POST', '/api/canals/', $canal)
        ->assertInvalid(['name' => 'The name has already been taken.']);

    }

    public function test_create_canal_with_invalid_amount(): void
    {

        $name_exist = Canal::inRandomOrder()->first()->name;

        $canal =
            [
                'name' => rand(),
                'amount' => random_int(-100, 0),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];


        $this->json('POST', '/api/canals/', $canal)
            ->assertInvalid(['amount']);

    }

    public function test_delete_noexisted_canal(): void
    {

        $CanalId = random_int(-10000, 0);


        $this->json('DELETE', '/api/canals/'. $CanalId)
            ->assertStatus(404);

    }

    public function test_for_update_hotel_review_that_not_exist()
    {

        $reviewId = random_int(100000, 999999);
        $canal =
            [
                'name' => rand(),
                'amount' => random_int(1, 10000),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        $this->json('PUT', 'api/canals/'. $reviewId, $canal)
            ->assertStatus(404);

    }

}
