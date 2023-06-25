import React from 'react';

import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;


axios.defaults.baseURL = process.env.REACT_APP_API_HOST

/**
 * @jest-environment jsdom
 */

 jest.mock("axios");


describe('api', () => {


    it("should get canals", async () =>
    {
        
        const canals = 
        {
            
        
                data:
                [
                    {
                        id: 1,
                        name: 'test1',
                        amount: 5,
                    },
                    {
                        id: 2,
                        name: 'TEST',
                        title: 7,
                    },
                ]
             
        }
        
      
        mockedAxios.get.mockResolvedValueOnce(canals);
        expect(axios.get).not.toHaveBeenCalled();
        const data = await axios.get('canals')
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(canals);
    
    });


    
    it('should give canal', () => {

        const canal = {
            data: {
              id: 1,
              name: 'test',
              amount: 1
            },
          };

          

          (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(canal));

          axios.get('ghghg').then((response) => {
            expect(response.data).toEqual(canal.data);
          });
    

    });

    


});

