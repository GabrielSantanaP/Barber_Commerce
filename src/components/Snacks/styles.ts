import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));
    gap: 1.75rem;

    @media (max-width: 500px){
        grid-template-columns: 1fr;
    }

    .snack{
        position: relative;
        background-color: ${({theme}) => theme.colors.gray600};
        padding: 1.75rem 1.5rem;
        border-radius: 4px;

        h2{
            margin-bottom: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;
            text-align: center;
        }

    
    img{
        /* object-fit: cover; */
        object-fit: contain;
        width: 100%;
        height: 11.25rem;
        border-radius: 4px;
        margin-bottom: 0.375rem;
        
    }

    p{
        font-size: 0.875rem;
    }

    div{
        margin-top: 0.875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong{
            font-size: 2rem;
            font-weight: 500;
        }

        button{
            background-color: ${({theme}) => theme.colors.gray800};
            width: 3rem;
            height: 3rem;
            border: none;
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            svg{
                stroke: ${({theme}) => theme.colors.white};
                width: 1.5rem;
                height: 1.5rem;      
            }

            &:hover{
                background: ${darken(.1, '#0C0D0F')}
            }
        }
    }
}
    @media (max-width: 1066px){
       .snack{
        img{
            object-fit: cover;
        }
       }
    }

    
`;

 export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input{
        position: relative;
        width: 30%;
        height: 2rem;
        border: none;
        border-radius: 4px;
        padding: 0 1rem;
        margin-bottom: 20px;
    }

    p{
        svg{
            stroke: ${({theme}) => theme.colors.gray300};
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: 15px;
        }
    }


 `