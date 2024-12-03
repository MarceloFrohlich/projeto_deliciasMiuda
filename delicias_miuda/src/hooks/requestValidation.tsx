interface ApiResponse {
    request: {
        status: number;
    };
    response?: {
        status?: number;
        data?: {
            validation?: Record<string, string[]>
            message?: Record<string, string[]>;
        };
    };
}

interface SuccessResponse {
    status: 'ok';
    mensagem: string; // ou um tipo mais específico se necessário
}

interface ErrorResponse {
    status: 'erro';
    mensagem: string;
}

const handleErrorMessage = (mensagem: string | string[]): string => {
    if (Array.isArray(mensagem)) {
        // Se for um array, junta as mensagens com um delimitador, como uma quebra de linha
        return mensagem.join('\n'); // ou use outro delimitador se preferir
    } else {
        // Se for uma string, apenas retorna
        return mensagem;
    }
};

type ApiResponseResult = SuccessResponse | ErrorResponse;

const handleApiResponse = (response: ApiResponse): ApiResponseResult => {

    if (response.request.status === 200) {
        return {
            status: 'ok',
            mensagem: "Adicionado com sucesso!"
        }
    }
    else if (response.request.status === 201) {
        return {
            status: 'ok',
            mensagem: "Adicionado com sucesso!"
        }
    }

    else if (response.request.status === 204) {
        return {
            status: 'ok',
            mensagem: "Deletado com sucesso!"
        }
    }

    else if (response.response?.status === 400) {
        console.log(response.response.data?.message)
        return {
            status: 'erro',
            mensagem: 'erro'
        }
    }
    else if (response.response?.status === 401) {
        console.log(response.response.data)
        return {
            status: 'erro',
            mensagem: 'Usuário não autorizado!'
        }
    }
    else if (response.response?.status === 403) {
        console.log(response.response.data)
        return {
            status: 'erro',
            mensagem: 'Você não tem permissão para executar essa ação!'
        }
    }
    else if (response.response?.status === 413) {
        console.log(response.response.data)
        return {
            status: 'erro',
            mensagem: 'Imagen muito Grande!'
        }
    }

    else if (response.response?.status === 422) {
        const { validation } = response.response.data || {};
        let allErrors: string[] = [];

        if (validation) {
            Object.entries(validation).forEach(([field, errors]) => {
                allErrors = [...allErrors, ...errors];
            });
        }
        return {
            status: 'erro',
            mensagem: handleErrorMessage(allErrors)
        }
    }

    else if (response.response?.status === 500) {
        return {
            status: 'erro',
            mensagem: 'Erro no servidor, contate o administrador do sistema'
        }
    }

    else {
        return {
            status: 'erro',
            mensagem: 'Erro inesperado, contate o administrador do sistema'
        }
    }
};

export default handleApiResponse;
